import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import timeout from 'connect-timeout';
import SequelizeConnection from './src/SequelizeConnection';
import routes from './src/api/routes'

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

(async () =>{
  await SequelizeConnection.connect();
})();
const haltOnTimedout = (req: Request, res: Response, next: NextFunction) => {
  if (!req.timedout) {
    next();
  }else{
    res.status(503).send('Request timed out.');
  }
}
app.use(timeout('30s'));
app.use(express.json());
app.use(haltOnTimedout)

app.get('/', (req: Request, res: Response) => {
  res.send('Express Server');
});
app.use(routes);

//error handler
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({message: "Oops! Something went wrong on our end."});
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});