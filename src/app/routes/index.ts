import { Router } from 'express';
import { AcademicSemisterRoutes } from '../modules/academicSemister/academicSemister.route';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semisters',
    route: AcademicSemisterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
