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

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to the DB", 9000);
    app.listen(PORT || 9000);
  })
  .catch((err) => {
    console.log(err);
  });
