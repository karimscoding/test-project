import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './middlewares/globalErrorhandler';
import notFound from './middlewares/notFound';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to server!🐕‍🦺');
});

// Global error
app.use(globalErrorHandler);

// Not found
app.use(notFound);

export default app;
