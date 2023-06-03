import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
const [details,setDetails]=useState({});

const {id}=useParams();

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())

            .then(data=>setDetails(data))
},[])
const {title}=details;
  return (
    <div>
   <h1>{id}</h1>
   <h1>{title}</h1>

    </div>
  )
}

export default ProductDetails