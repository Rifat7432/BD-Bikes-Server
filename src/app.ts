import express, { Request, Response } from 'express';
import router from './app/roter';
import cors from 'cors'
import { gobbleErrorHandler } from './app/middlewares/globleErrorHandeler';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);

const test = async (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/api', test);

app.use(gobbleErrorHandler.gobbleError);
app.use(gobbleErrorHandler.notFound)
export default app;
