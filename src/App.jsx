import React, { useState } from 'react'

import {  createBrowserRouter, createRoutesFromElements, Route,RouterProvider,Routes } from 'react-router-dom'
import {  Outlet,  } from 'react-router-dom'

import Apps from './Apps'
import Home from './assets/Home'
import Product from './Product'




const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Apps/>}>
        <Route path='home' element={<Home />} />
        <Route path='service' element={<Apps/>} />
        <Route path="product" elemebt={<Product/>}></Route>
      </Route>
      
    )
  )
  return (
    <RouterProvider router={router}/>
  )

 
}

export default App
