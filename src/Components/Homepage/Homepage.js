import React, { useState } from 'react'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import AllProducts from '../AllProducts/AllProducts'
import "./Homepage.css"

function Homepage() {

  const [editProductDetails,setEditProductDetails]=useState({})

  const handleEditButton=(id)=>{
    console.log("Edit product id", id);

    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setEditProductDetails(data))

  }

  return (
    <div className='homepage_container'>
        {/* All Products r here */}
        <div className='allProductsList'>
        <AllProducts handleEditButton={handleEditButton} />
        </div>

        {/* Add new product form */}
        <div>
            <AddNewProduct editProductDetails={editProductDetails} />
        </div>
    </div>
  )
}

export default Homepage