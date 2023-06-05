import React, { useState } from "react";

const AddNewProduct = ({editProductDetails}) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const {title,category,description,price, image}=editProductDetails;
  console.log("add new product name is", editProductDetails);
  

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setProductImageUrl(event.target.value);
  };

  const handlePriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!productName || !productDescription || !productCategory || !productImageUrl || !productPrice) {
      alert("Please fill all the fields");
      return;
    }
    // Perform any additional logic here, such as sending the form data to a server

    // Clear the form fields
    setProductName("");
    setProductDescription("");
    setProductCategory("");
    setProductImageUrl("");
    
    console.log(event.target.value);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            defaultValue={title ? title : productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            defaultValue={description ? description : productDescription}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>

          <select name="category" defaultValue={category ? category : productCategory} onChange={handleCategoryChange}>
            <option value="option1">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Jewelery">Jewelery</option>
            <option value="Mens clothing">Men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            defaultValue={image ? image : productImageUrl}
            onChange={handleImageUrlChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>

          <input
            type="number"
            name="quantity"
            defaultValue={price ? price : productPrice}
            
            onChange={handlePriceChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNewProduct;
