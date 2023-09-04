import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProduct } from "./actions";
function AddForm() {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [type, setType] = useState("");
  const [sound, setSound] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(addProduct({ name, type, imageURL, sound, description }));
    navigate("/Admin/All");
    console.log("added");
  }

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
    <div>
      <h1>Add New Product</h1>
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
            <span className="plus-icon">+</span>
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

        <Link to="/Admin" className="btn cancel">
          Cancel
        </Link>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

AddForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default AddForm;
