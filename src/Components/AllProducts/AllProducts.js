import React, { useEffect, useState } from 'react';

function AllProducts() {

    const [allProductsList,setAllProductsList]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    })

  return (
    <div>
        <p>This is products</p>
    </div>
  )
}

export default AllProducts