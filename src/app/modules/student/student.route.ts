import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// Create student route
router.post('/create-student', StudentControllers.createStudent);

// Get students route
router.get('/', StudentControllers.getAllStudents);

// Get a single student route
router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
