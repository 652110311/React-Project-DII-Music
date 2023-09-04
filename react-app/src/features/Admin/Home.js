import React, { useState, useEffect } from "react";
import Product from "./products";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

// let currentProductId = 45;
function HomeAdmin({ selectedOption, products, className }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Use the useEffect hook to filter products when selectedOption or products change
  useEffect(() => {
    // Check if a selected option is provided and filter products accordingly
    if (selectedOption) {
      const filtered = products.filter(
        (product) => product.type === selectedOption.value
      );
      console.log(`filter ${selectedOption.value}`);
      setFilteredProducts(filtered);
    } else {
      // If no selected option is provided, show all products
      setFilteredProducts(products);
    }
  }, [selectedOption, products]);
  return (
    <div className={className}>
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2"> Products </span>
        </h2>
      </div>
      <Link to="/Admin/add-product" className="add-label">
        <div className="add-box">
          <span className="plus-icon">+</span>
        </div>
      </Link>
      <ul className="products-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
    </div>
  );
}

HomeAdmin.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(HomeAdmin)`
  padding-top: 3rem;
  width: 90%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  .content-products {
    padding-bottom: 0.25rem;
    position: relative;
    width: 20%;
    height: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .products-list {
    padding-bottom: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: -15px;
    margin-left: -15px;
  }

  .text-center {
    text-align: center !important;
    color: #f77a6e;
    font-size: larger;
  }

  .mb-4,
  .my-4 {
    margin-bottom: 1.5rem !important;
  }

  div {
    display: block;
  }

  .plus-icon {
    font-size: 40px;
    color: #aaa;
    z-index: 1;
  }

  .plus-icon:hover {
    color: #555;
  }
  .add-box {
    background-color: #f4f4f4;
    border: 2px dashed #aaa;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    height: 100%;
  }

  .add-label {
    display: inline-block;
    cursor: pointer;
    padding-bottom: 0.25rem;
    position: relative;
    width: 20%;
    padding-right: 15px;
    padding-left: 15px;
    text-decoration: none;
  }
`;
