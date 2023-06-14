import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import SequelizeConnection from './src/SequelizeConnection';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

(async () =>{
  await SequelizeConnection.connect();
})();

app.get('/', (req: Request, res: Response) => {
  res.send('Express Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});