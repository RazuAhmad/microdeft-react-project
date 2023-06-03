import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import ProductDetails from './Components/ProductDetails/ProductDetails';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      

     
      <Route path='/' element={<Homepage/>} />
      
      
      <Route path='/products/:id' element={<ProductDetails/>} />
      
     </Routes>

     <Homepage/>
      
    </>
  )
}

export default App