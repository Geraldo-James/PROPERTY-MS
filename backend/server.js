
import express from "express"
import router from "./routes/authRoutes.js"

const app = express()
app.use(express.json())
app.use(router)


app.listen(process.env.PORT , ()=>{
    console.log(`running on port http://localhost:${process.env.PORT}`)
})
