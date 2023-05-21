import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
     
// createApi allow us to create api end points to grab data from the backend
export const api = createApi({  ///we are passing the base url
  //fetchBaseQuery is a function
  // baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/" }),
  reducerPath: "main", // name of the reducer and the slice
  tagTypes: ["kpis"],  // what is been used to keep information 
  endpoints: (build) => ({
    getKpis: build.query<void, void>({  //setup a function that it will grab are information
      query: () => "kpi/kpis/",  // we are making a call to this url + the base url
      providesTags: ["kpis"]
    }),
  })
})

export const { useGetKpisQuery } = api 