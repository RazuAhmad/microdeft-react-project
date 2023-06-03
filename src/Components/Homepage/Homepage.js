import React from 'react'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import AllProducts from '../AllProducts/AllProducts'
import "./Homepage.css"

function Homepage() {
  return (
    <div className='homepage_container'>
        {/* All Products r here */}
        <div className='allProductsList'>
        <AllProducts/>
        </div>

        {/* Add new product form */}
        <div>
            <AddNewProduct/>
        </div>
    </div>
  )
}

export default Homepage