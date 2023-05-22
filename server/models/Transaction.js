import mongoose from 'mongoose'
import { loadType } from "mongoose-currency"

const Schema = mongoose.Schema
loadType(mongoose) // allow us to use the Types.Currency below


const TransactionSchema = new Schema(
  {
    buyer: { // will be able to the in decimals
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 // we want to grab the value in the currency and divede by 100
      //the currency multiplies by 100
    },
    amount: { 
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
    ]
  },
  {timestamps: true, toJSON: { getters: true }}
)

const Transaction = mongoose.model("Transaction", TransactionSchema)

export default Transaction