import router from "./routes/user.route"

const express = require('express')
const app = express()
const port = 3000

const useRouter = router

app.use(express.json())

app.use('/user', useRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))