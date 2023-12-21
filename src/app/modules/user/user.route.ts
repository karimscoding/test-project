import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { studentValidationSchema } from '../student/student.validation';
import { UsertControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidationSchema),
  UsertControllers.createStudent,
);

export const UserRoutes = router;
