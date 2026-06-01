import express, { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import { z } from 'zod';
import validateRequest from '../../../middleware/validateRequest';

const adminLoginSchema = z.object({
  body: z.object({
    password: z.string().min(1, 'Password is required'),
  }),
});

const adminLogin = catchAsync(async (req: Request, res: Response) => {
  const { password } = req.body;

  if (password !== config.admin_password) {
    return sendResponse(res, {
      statusCode: httpStatus.UNAUTHORIZED,
      success: false,
      message: 'Invalid password',
      data: null,
    });
  }

  const token = jwt.sign(
    { role: 'admin', userId: 'admin' },
    config.jwt_secret_token as string,
    { expiresIn: '1d' }
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin login successful!',
    data: { accessToken: token },
  });
});

export const adminAuthRoutes = express.Router();

adminAuthRoutes.post('/login', validateRequest(adminLoginSchema), adminLogin);
