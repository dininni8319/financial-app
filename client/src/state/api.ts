import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse } from './types'
// createApi allow us to create api end points to grab data from the backend
export const api = createApi({  ///we are passing the base url
  //fetchBaseQuery is a function
  // baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/" }),
  reducerPath: "main", // name of the reducer and the slice
  tagTypes: ["kpis", "Products"],  // what is been used to keep information 
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({  //setup a function that it will grab are information
      query: () => "kpi/kpis/",  // we are making a call to this url + the base url
      providesTags: ["kpis"]
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({  //setup a function that it will grab are information
      query: () => "product/products/",  // we are making a call to this url + the base url
      providesTags: ["Products"]
    }),
    // deleteProduct: 
      // invalidateTags: [ "Products"]
  })
})

export const { useGetKpisQuery, useGetProductsQuery } = api 