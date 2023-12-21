import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { AcademicSemisterControllers } from './academicSemister.controller';
import { AcademicSemisterValidations } from './academicSemister.validation';

const router = express.Router();

router.post(
  '/create-academic-semister',
  validateRequest(
    AcademicSemisterValidations.createAcademicSemisterValidationSchema,
  ),
  AcademicSemisterControllers.createAcademicSemister,
);

export const AcademicSemisterRoutes = router;
