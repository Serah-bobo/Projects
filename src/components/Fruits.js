import React from 'react'
import { Route, Routes } from "react-router-dom"
import HomePage from '../Pages/HomePage'
import FruitsPage from '../Pages/FruitsPage'
import FruitDetailsPage from '../Pages/FruitDetailsPage'
import Data from '../data/Data'
import Layout from './Layout'
import CartPage from '../Pages/CartPage'
import { useState } from 'react'

const Fruits = () => {
   const [cart]=useState([]);
  return (
    <div>
     
      <Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<HomePage/>}/>
  <Route path='fruits' element={<FruitsPage/>}/>
<Route path='fruits/:id' element={<FruitDetailsPage  fruits={Data}/>}/>
<Route path='cart' element={<CartPage cart={cart}/>}/>
  </Route>
</Routes>
    </div>
  )
}

export default Fruits

