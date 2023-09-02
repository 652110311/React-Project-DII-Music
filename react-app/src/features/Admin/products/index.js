import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateProduct, deleteProduct } from "./actions";
import styled from "styled-components";
function Product({ item, className }) {
  const productImage = require(`../../../assets/${item.imageURL}`); //syntax commonjs import dynamic file
  const handleDelete = () => {
    // Call the deleteProduct function with the product's ID
    onDelete(item.id);
    console.log(`deleteclick ${item.type} ${item.id}`);
  };

  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === Number(item.id));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDelete = () => {
    dispatch(deleteProduct({ id: product.id }));
    navigate("/");
  };

  return (
    <>
      <div class={className}>
        <div class="card product-item">
          <div class="card-header product-img">
            <img class="" src={productImage} alt={item.name} />
          </div>
          <div class="card-body">
            <h6 class="text-truncate">{item.name}</h6>
            <div class="price-zone">
              <h6 className="price">{item.price}</h6>
              <h6 class="text-muted ">
                <del>$123.00</del>
              </h6>
            </div>
          </div>
          <div class="card-footer">
            <Link to={`/update-product/${item.id}`} className="btn edit-button">
              <button></button>
              <i class="fas fa-edit text-primary mr-1"></i>
              Edit
            </Link>
            <button className="btn delete-button" onClick={handleDelete}>
              <i class="fas fa-trash text-primary mr-1"></i>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Product)`
  /* ---------------------------------product zone---------------------------- */

  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  margin-bottom: 1.5rem;

  padding-bottom: 0.25rem;
  position: relative;
  width: 20%;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;

  .edit-button {
    text-decoration: none;
  }
  .fa {
    font-weight: 900;
    font-family: "Font Awesome 5 Free";
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
  }

  .text-primary {
    color: #d19c97 !important;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    color: #6f6f6f;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }

  .btn:hover {
    color: #6f6f6f;
    text-decoration: none;
  }

  .btn:focus,
  .btn.focus {
    outline: 0;
    box-shadow: none;
  }

  .btn.disabled,
  .btn:disabled {
    opacity: 0.65;
  }

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  a.btn.disabled,
  fieldset:disabled a.btn {
    pointer-events: none;
  }
  .card-header {
    background-color: transparent;
    border: 1px solid #edf1ff;
    overflow: hidden;
    position: relative;
    padding: 0;
  }

  .product-item .product-img img {
    transition: 0.5s;
    width: 100%;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  .card-body {
    text-align: center;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    padding: 10px;
    border-left: 1px solid #edf1ff;
    border-right: 1px solid #edf1ff;
    flex: 1 1 auto;
    min-height: 1px;
  e}

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: #1c1c1c;
    margin-top: 0;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
  }

  .price-zone {
    display: flex;
    justify-content: center;
  }

  .price {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: #1c1c1c;
    margin-top: 0;
    text-align: center;
  }

  .text-muted {
    color: #6c757d;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    border: 1px solid #edf1ff;
    background-color: #ffffff;
    padding: 0.75rem 1.25rem;
  }

  .edit-button,
  .delete-button {
    cursor: pointer;
    color: #1c1c1c;
    padding: 0;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0;
  }

  .mr-1 {
    margin-right: 0.25rem;
  }
`;
