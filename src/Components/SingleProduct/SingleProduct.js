import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SingleProduct.css";

function SingleProduct({ productDetails }) {
  const { id, title, price, category, description, image } = productDetails;

  return (
    <div className="single-product_container">
      <Link to={`/products/${id}`}>
        <div style={{ marginRight: "5px" }}>
          <img style={{ width: "100px" }} src={image} alt="img" />
        </div>
        <div className="product_details">
          <div className="button">
            <p>
              <button>edit</button>
            </p>
            <p>
              <button>delete</button>
            </p>
          </div>
          <p>{title}</p>
          <p style={{ color: "blue" }}>BDT ৳{price}</p>
          <p>{category}</p>
        </div>
      </Link>
    </div>
  );
}

export default SingleProduct;
