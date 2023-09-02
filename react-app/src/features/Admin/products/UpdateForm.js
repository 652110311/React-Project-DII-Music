import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateProduct } from "./actions";
function UpdateForm() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === Number(id));

  const [name, setName] = useState(product.name);
  const [imageURL, setImageURL] = useState(`${product.imageURL}`);
  const [type, setType] = useState(product.type);
  const [sound, setSound] = useState(`${product.sound}`);
  const [description, setDescription] = useState(product.description.product);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateProduct({
        id: product.id,
        name,
        type,
        imageURL,
        sound,
        description,
      })
    );
    navigate("/");
  };

  function handleImageChange(event) {
    const selectedImage = event.target.value.split(/[\\|/]/).pop();
    // Extract the filename from the selected file path

    setImageURL(selectedImage); // Set the filename as the imageURL
  }

  const handleSoundChange = (event) => {
    // Get the selected file from the input element
    const selectedFile = event.target.value.split(/[\\|/]/).pop();
    // Do something with the selected file, e.g., store it in state
    setSound(selectedFile);
  };

  return (
    <>
      <h1>Update Product</h1>
      {product ? (
        <form id="create-form" onSubmit={onSubmit}>
          <input
            type="file"
            id="product-image"
            name="product-image"
            accept="image/*"
            className="file-input"
            onChange={handleImageChange}
          />
          <label htmlFor="product-image" className="file-label">
            <div className="file-box">
              <span className="plus-icon">
                {" "}
                <img class="product-img" src={imageURL} alt={name} />{" "}
                {/* Display the existing image */}
                <i class="fas fa-edit  mr-1"></i>
              </span>
            </div>
          </label>
          <label htmlFor="product-name">Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="type">Product Category:</label>
          <input
            name="type"
            type="text"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
          <label htmlFor="product-sound">Product Sound (MP3):</label>
          <input
            type="file"
            id="product-sound"
            name="product-sound"
            accept="audio/mp3"
            onChange={handleSoundChange}
          />
          <label htmlFor="product-description">Product Description:</label>
          <textarea
            id="product-description"
            name="product-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
          <Link to="/" className="btn">
            Cancel
          </Link>

          <button type="submit" onClick={console.log("updated")}>
            Update Product
          </button>
        </form>
      ) : (
        <div>Loading product....</div>
      )}
    </>
  );
}

export default UpdateForm;
