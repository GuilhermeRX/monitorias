require('express-async-errors');
const express = require('express')
const app = express();
const port = 3000
const userRouter = require('./router/userRouter');

app.use(express.json());

app.use('/user', userRouter);

app.use((err, req, res, next) => {
  const { message } = err;
  res.status(404).json({ message })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))