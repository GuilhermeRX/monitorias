import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { ZodError } from 'zod';
import { ErrorTypes } from './errors';
import { errorCatalog } from './erros/catalog';
import "./Models/connection";
import bookRouter from './routes/bookRoute';
import userRouter from './routes/userRoute';

const app = express()
const port = 3000
app.use(express.json());

app.use('/books', bookRouter);
app.use('/users', userRouter);
app.get('/', (req, res) => res.send('Hello World!'))

app.use((err: ZodError | Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) return res.status(404).json({ message: err.issues })


  const mappedError = errorCatalog[err.message as ErrorTypes];

  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message })
  }

  return res.status(500).json({ message: 'internal error' })
})

app.listen(port, () => console.log(`Escutando na porta ${port}!`))