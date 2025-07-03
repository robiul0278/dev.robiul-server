import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { projectValidationSchema } from "./project.validation";
import { productController } from "./project.controller";
import { USER_ROLE } from "../auth/auth.constant";

const router = express.Router();

// call controller function 
router.post('/create',
    validateRequest(projectValidationSchema),
    productController.createProject
);

router.get('/', 
    productController.getAllProject
);

export const projectRoutes = router;