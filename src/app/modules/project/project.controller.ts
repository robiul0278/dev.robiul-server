import { RequestHandler } from "express";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { productServices } from "./project.service";

const createProject = catchAsync(async (req, res) => {
    const result = await productServices.createProjectDB(req.body);

    // send response 
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Project create successfully!",
        data: result,
    })
})
const getAllProject = catchAsync(async (req, res) => {
    const result = await productServices.getAllProjectDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Project get successfully!",
        data: result,
    })
})
const deleteProject = catchAsync(async (req, res) => {
    const {id} = req.params;

    const result = await productServices.deleteProjectDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Project delete successfully!",
        data: result,
    })
})

export const productController = {
    createProject,
    getAllProject,
    deleteProject,
}

