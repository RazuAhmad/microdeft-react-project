import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./AllProducts.css";

function AllProducts({handleEditButton}) {

    const [allProductsList,setAllProductsList]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setAllProductsList(data))
    },[])

    const handleDeleteButton=(id)=>{
      
      console.log("deleting product id", id);
      const filteredData=allProductsList.filter((pd)=>pd.id!==id);
      setAllProductsList(filteredData)
    }

  return (
    <div className='allProducts_container'>
        {
            allProductsList.map((pd)=><SingleProduct handleDeleteButton={handleDeleteButton} handleEditButton={handleEditButton} productDetails={pd} key={pd.id} />)
        }
    </div>
  )
}

export default AllProducts