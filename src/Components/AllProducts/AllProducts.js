import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./AllProducts.css";

function AllProducts() {

    const [allProductsList,setAllProductsList]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setAllProductsList(data))
    },[])

  return (
    <div className='allProducts_container'>
        {
            allProductsList.map((pd)=><SingleProduct productDetails={pd} key={pd.id} />)
        }
    </div>
  )
}

export default AllProducts