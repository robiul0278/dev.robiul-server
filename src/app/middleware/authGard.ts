import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import config from "../../config";
import catchAsync from "../../shared/catchAsync";
import AppError from "../errors/AppError";
import { userModel } from "../modules/auth/auth.model";
import { TUserRole } from "../modules/auth/auth.interface";

const authGard = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {


    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
    //! checking if the given token is valid
    let decoded: JwtPayload;
    try {
      decoded = jwt.verify(token, config.jwt_secret_token as string) as JwtPayload;
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        throw new AppError(httpStatus.UNAUTHORIZED, "jwt expired");
      }
      throw new AppError(httpStatus.UNAUTHORIZED, "Invalid token");
    }
    const { role, userId } = decoded;

    // Admin auth: skip DB lookup (admin is password-only, no user record)
    if (role === 'admin') {
      if (requiredRoles && !requiredRoles.includes('admin')) {
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
      }
      (req as any).user = decoded as JwtPayload & { role: string };
      return next();
    }

    //! checking if the user is exist
    const user = await userModel.findById({ _id: userId });
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    (req as any).user = decoded as JwtPayload & { role: string };
    next();
  });
};

export default authGard;