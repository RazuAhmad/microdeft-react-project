import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SingleProduct.css";

function SingleProduct({ productDetails,handleEditButton,handleDeleteButton }) {
  const { id, title, price, category, description, image } = productDetails;

  return (
    <div className="single-product_container">
      
        <div style={{ marginRight: "5px" }}>
        <Link to={`/products/${id}`}>
          <img style={{ width: "100px" }} src={image} alt="img" />
          </Link>
        </div>
       

        <div className="product_details">
          <div className="button">
            <p>
              <button onClick={()=>handleEditButton(id)}>edit</button>
            </p>
            <p>
              <button onClick={()=>handleDeleteButton(id)}>delete</button>
            </p>
          </div>
          <Link to={`/products/${id}`}>
          
          <p>{title}</p>
          <p style={{ color: "blue" }}>BDT ৳{price}</p>
          <p>{category}</p>

          </Link>
        </div>
      
    </div>
  );
}

export default SingleProduct;
