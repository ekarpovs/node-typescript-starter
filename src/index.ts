import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Express, Request, Response, Router } from 'express';

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());

// Routers Setup
const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello world!' });
});

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
