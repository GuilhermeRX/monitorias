import userRoute from "./Routes/user.route"

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use('/user', userRoute)
app.listen(port, () => console.log(`Escutando na porta ${port}!`))