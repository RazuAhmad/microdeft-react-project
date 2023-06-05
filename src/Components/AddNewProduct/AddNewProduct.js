import React, { useState } from "react";

const AddNewProduct = ({editProductDetails}) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const {title,category,image,price,description}=editProductDetails;

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!productName || !description || !category || !imageUrl || !price) {
      alert("Please fill all the fields");
      return;
    }
    // Perform any additional logic here, such as sending the form data to a server

    // Clear the form fields
    setProductName("");
    setDescription("");
    setCategory("");
    setImageUrl("");
    
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
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>

          <select name="category" onChange={handleCategoryChange}>
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
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>

          <input
            type="number"
            name="quantity"
            min="1"
            max="100"
            step="1"
            onChange={handlePriceChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNewProduct;
