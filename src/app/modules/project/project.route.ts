import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { projectValidationSchema } from "./project.validation";
import { productController } from "./project.controller";
import { USER_ROLE } from "../auth/auth.constant";

const router = express.Router();

router.post('/create',
    validateRequest(projectValidationSchema),
    productController.createProject
);

router.get('/', 
    productController.getAllProject
);
router.delete('/delete/:id', 
    productController.deleteProject
);
router.patch('/update/:id', 
    validateRequest(projectValidationSchema),
    productController.updateProject
);
router.get('/single/:id', 
    productController.singleProject
);

export const projectRoutes = router;

