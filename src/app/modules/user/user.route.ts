import express from 'express';
import { UsertControllers } from './user.controller';

const router = express.Router();

router.post('/create-student', UsertControllers.createStudent);

export const UserRoutes = router;
