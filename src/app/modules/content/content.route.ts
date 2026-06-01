import express from 'express';
import { contentController } from './content.controller';
import authGard from '../../middleware/authGard';

const router = express.Router();

router.get('/', contentController.getContent);
router.post('/seed', authGard('admin'), contentController.seedContent);
router.put('/', authGard('admin'), contentController.updateContent);

export const contentRoutes = router;
