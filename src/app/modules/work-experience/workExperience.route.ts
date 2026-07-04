import express from 'express';
import authGard from '../../middleware/authGard';
import validateRequest from '../../middleware/validateRequest';
import { workExperienceController } from './workExperience.controller';
import { workExperienceValidationSchema } from './workExperience.validation';

const router = express.Router();

router.get('/', workExperienceController.getAllWorkExperience);

router.get('/:id', workExperienceController.getSingleWorkExperience);

router.post(
  '/',
  authGard('admin'),
  validateRequest(workExperienceValidationSchema),
  workExperienceController.createWorkExperience,
);

router.patch(
  '/:id',
  authGard('admin'),
  workExperienceController.updateWorkExperience,
);

router.delete(
  '/:id',
  authGard('admin'),
  workExperienceController.deleteWorkExperience,
);

export const workExperienceRoutes = router;
