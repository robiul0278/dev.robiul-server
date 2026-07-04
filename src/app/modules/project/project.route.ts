import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { projectValidationSchema, projectUpdateValidationSchema } from "./project.validation";
import { productController } from "./project.controller";
import authGard from "../../middleware/authGard";

const router = express.Router();

router.post('/create',
    authGard('admin'),
    validateRequest(projectValidationSchema),
    productController.createProject
);

router.get('/', 
    productController.getAllProject
);
router.delete('/delete/:id', 
    authGard('admin'),
    productController.deleteProject
);
router.patch('/update/:id', 
    authGard('admin'),
    validateRequest(projectUpdateValidationSchema),
    productController.updateProject
);
router.get('/single/:id', 
    productController.singleProject
);

export const projectRoutes = router;

