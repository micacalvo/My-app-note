import express from "express";
import cors from "cors";
import database from "./database/db.js";
import noteRoutes from "../backend/routes/routes.js"
//import tagRoutes from "../backend/routes/routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use('/notes', noteRoutes)
//app.use("/tags", tagRoutes)

try {
    await database.authenticate()
    console.log('Connected to database')
} catch (error) {
    console.log(`Connection error: ${error}`)
}

app.get('/', (req, res) => {
    res.send('Hola')
})

app.listen(8050, () => {
    console.log("Server running on port 8080")
})