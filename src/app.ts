import express, { Application, Request, Response, NextFunction } from 'express';
import { router as userRouter } from './routes/user.routes';

const app: Application = express();

app.use('/users', userRouter);

app.use('/health-check', (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: 'I am healthy. Thankyou!'});
});

export default app;