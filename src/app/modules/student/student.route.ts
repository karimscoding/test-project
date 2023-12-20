import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// Get students route
router.get('/', StudentControllers.getAllStudents);

// Get a single student route
router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
