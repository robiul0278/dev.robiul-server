import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { contentServices } from './content.service';

const getContent = catchAsync(async (req: Request, res: Response) => {
  const result = await contentServices.getContent();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content retrieved successfully!',
    data: result,
  });
});

const updateContent = catchAsync(async (req: Request, res: Response) => {
  const result = await contentServices.updateContent(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content updated successfully!',
    data: result,
  });
});

const seedContent = catchAsync(async (req: Request, res: Response) => {
  const result = await contentServices.seedDefaultContent();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Default content seeded successfully!',
    data: result,
  });
});

export const contentController = {
  getContent,
  updateContent,
  seedContent,
};
