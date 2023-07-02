import { useState } from "react";
import axios from 'axios'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Loginform from "../components/Loginform";
import Navbar from "../components/navbar";


import reactLogo from "./assets/react.svg";
import styled from 'styled-components'

import { BrowserRouter, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Orderhistory from "../components/Orderhistory";
import Homepage from "../components/Homepage";
import Showallpizzaitems from "../components/Showallpizzaitems";

import rootReducer from "./redux/store";

// import "./App.css";
// import { Console } from "console";
// import { response } from "express";

const Container = styled.div`

`

const router = createBrowserRouter([
  { path: '/', element: <Homepage/> },
  { path: '/orderhistory', element: <Orderhistory/>}
])

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
{console.log("STORE", store.getState())}

function App() {

  // axios.get("/menuitems").then(function(response){
  //   console.log(response.data)
  // })



  return (

    <Provider store = {store}>
    <RouterProvider router = {router}> 
    
   
    </RouterProvider>
    </Provider>
   
  )
}

export default App;


