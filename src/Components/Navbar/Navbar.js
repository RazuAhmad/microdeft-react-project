import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const handleFilterProduct = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="navbar_container">
      <div className="title">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar_container-links">
        <p>Products</p>
        <p>Wishlist</p>
        <p>My Collection</p>
      </div>
      <div>
        <p>
          <input
            onChange={handleFilterProduct}
            placeholder="Filter Products"
            type="text"
          />
        </p>
      </div>
    </div>
  );
}

export default Navbar;
