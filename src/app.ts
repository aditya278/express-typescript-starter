import express, { Application, Request, Response, NextFunction } from 'express';
import userRouter from './routes/user.routes';
import errorMiddleware from './middlewares/error';

const app: Application = express();

app.use('/users', userRouter);

app.get('/health-check', (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: 'I am healthy. Thankyou!'});
});

// Make sure to keep it at the last
app.use(errorMiddleware);

export default app;