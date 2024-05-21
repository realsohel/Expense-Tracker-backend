import express from 'express'
import { configDotenv } from 'dotenv'
import cors from 'cors'
import db from './db/db.js' 
import {readdirSync} from 'fs'
import router from './routes/transaction.js'
const app = express()
const dotenv = configDotenv()
const PORT = process.env.PORT || 8000
// Middlewares
app.use(express.json());
app.use(cors())

// Routes

app.use("/api/v1/", router);

const server = ()=>{
    db()
    app.listen(PORT,()=>{
        console.log("listening on :" , PORT)
    })
}

server()
