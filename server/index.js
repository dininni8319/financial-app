import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from "cors"
import morgan from "morgan"
import dotenv from 'dotenv'
import helmet from 'helmet'

//COFIGURATIONS
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())

console.log("hello from the server")
// MONGOOSE SETUP
