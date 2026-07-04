import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { workExperienceServices } from './workExperience.service';

const createWorkExperience = catchAsync(async (req, res) => {
  const result = await workExperienceServices.createWorkExperienceDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Work experience created successfully!',
    data: result,
  });
});

const getAllWorkExperience = catchAsync(async (req, res) => {
  const result = await workExperienceServices.getAllWorkExperienceDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Work experiences retrieved successfully!',
    data: result,
  });
});

const getSingleWorkExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await workExperienceServices.getSingleWorkExperienceDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Work experience retrieved successfully!',
    data: result,
  });
});

const updateWorkExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await workExperienceServices.updateWorkExperienceDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Work experience updated successfully!',
    data: result,
  });
});

const deleteWorkExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await workExperienceServices.deleteWorkExperienceDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Work experience deleted successfully!',
    data: result,
  });
});

export const workExperienceController = {
  createWorkExperience,
  getAllWorkExperience,
  getSingleWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
};
