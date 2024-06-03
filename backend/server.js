import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv"

import productroute from '../backend/Routes/ProductRoutes.js'
import UserRouter from './Routes/UserRoutes.js'



const app=express()

app.use(cors())

app.use(express.json())

dotenv.config()




app.use('/api/v1',productroute)

app.use('/api/v1',UserRouter)

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shoes');
  console.log('mongodb connected')
}

app.listen(process.env.PORT,()=>{
    console.log(`port ${process.env.PORT} connected`)
})