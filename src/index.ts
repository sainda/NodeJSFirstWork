import express, {Express,Request,Response } from 'express'
import dotenv from 'dotenv'
import *  as fs from 'fs'
import mongoose from 'mongoose'
import './database'
import todoRoutes from './Routes/todoRoutes'
import bodyParser from "body-parser";

dotenv.config()

const app=express()
const port=process.env.PORT

app.get('/',(req:Request,res:Response)=>{
    res.send('RESPONSE.FROM API: express + typescript server')
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})

app.use(bodyParser.json())
app.use('/v1/api',todoRoutes)









