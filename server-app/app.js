import routes from "./routes/index.js"
import express from "express"
import cors from "cors"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, () => {
    console.log(`Start listening at http://localhost:${port}`)
})

