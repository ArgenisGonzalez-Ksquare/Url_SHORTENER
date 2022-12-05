import express, { Application, Request, Response } from 'express';
const app: Application = express();
import { UrlRouter } from './routes/Url.routes'

app.use(express.json());
app.use('/u', UrlRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('VIVEEEEEEEEEEE');
})


export default app;