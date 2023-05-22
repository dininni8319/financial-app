import mongoose from 'mongoose'
import { loadType } from "mongoose-currency"

const Schema = mongoose.Schema
loadType(mongoose) // allow us to use the Types.Currency below


const ProductSchema = new Schema(
  {
    price: { // will be able to the in decimals
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 // we want to grab the value in the currency and divede by 100
      //the currency multiplies by 100
    },
    expense: { 
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (value) => value / 100 
    },
    transaction: [
      {
        type: mongoose.Schema.Types.ObjectId,
        currency: "USD",
        ref: "Transaction"
      },
    ]
  },
  {timestamps: true, toJSON: { getters: true }}
)

const Product = mongoose.model("Product", ProductSchema)

export default Product