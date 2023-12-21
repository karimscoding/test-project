import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './middlewares/globalErrorhandler';
import notFound from './middlewares/notFound';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to server!🐕‍🦺');
});

// Global error
app.use(globalErrorHandler);

// Not found
app.use(notFound);

export default app;
