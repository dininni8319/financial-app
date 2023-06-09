import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from "cors"
import morgan from "morgan"
import dotenv from 'dotenv'
import helmet from 'helmet'
import kpiRoutes from "./routes/kpi.js"
import productsRoutes from './routes/product.js'
import transationRoutes from "./routes/transaction.js"
import Transaction from "./models/Transaction.js"
import Product from "./models/Product.js"
import KPI from "./models/KPI.js"
import { kpis, products, transactions } from "./data/data.js"


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

// Routes

app.use("/kpi", kpiRoutes)
app.use("/product", productsRoutes)
app.use("/transaction", transationRoutes)
// MONGOOSE SETUP
const PORT = process.env.PORT || 9000

mongoose
  .connect(process.env.DATABASE)
  .then(async () => {
    console.log("Connected to the DB", PORT);
    app.listen(PORT || 9000);

    // ADD DATA ONE TIME ONLY OR AS NEEDED
    // await mongoose.connection.db.dropDatabase() // here we want to seed the DB, but first we have to drop the DB, to avoid duplicates
    // KPI.insertMany(kpis)
    // Product.insertMany(products)
    // Transaction.insertMany(transactions)
  })
  .catch((err) => {
    console.log(err);
  });
