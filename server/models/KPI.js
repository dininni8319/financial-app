import mongoose from 'mongoose'
import { loadType } from "mongoose-currency"

const Schema = mongoose.Schema
loadType(mongoose) // allow us to use the Types.Currency below

const daySchema = new Schema(
  {
    day: String,
    revenue: { 
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 
    },
    expenses: { 
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 
    },
  },
  {toJSON : { getters: true }}
)


const monthSchema = new Schema(
  {
    month: String,
    revenue: { 
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 
    },
    expenses: { 
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 
    },
    operationalExpenses: { 
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 
    },
    nonOperationalExpenses: { 
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 
    },
  },
  {toJSON : { getters: true }} // Setting that we can use the get properties above
)


const KPISchema = new Schema(
  {
    totalProfit: { // will be able to the in decimals
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 // we want to grab the value in the currency and divede by 100
      //the currency multiplies by 100
    },
    totalrevenue: { 
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (value) => value / 100 
      }
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema]
  },
  {timestamps: true, toJSON: { getters: true }}
)

const KPI = mongoose.model("KPI", KPISchema)

export default KPI