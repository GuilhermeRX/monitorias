const express = require('express')
const app = express()
app.use(express.json());
const port = 3000
const userRouter = require('./routes/user.route');

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/users', userRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))