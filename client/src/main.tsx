import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/index.css'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import { api } from "@/state/api"

export const store = configureStore({ // we are setting up our api reducer path
  reducer: { [api.reducerPath]: api.reducer }, // we passing the api reducer
  middleware: (getDefault) => getDefault().concat(api.middleware), // set up configuration that help us make it work
})

setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
