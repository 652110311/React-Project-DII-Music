import React, { useState, useEffect } from "react";
import Home from "../Home";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
const Dropdown = ({ options, onSelect, className }) => {
  const homeImage = require(`../../../assets/home.png`);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [selectedOptionConfirm, setSelectedOptionConfirm] = useState(null);

  const toggleDropdownConfirm = () => {
    setIsOpenConfirm(!isOpenConfirm);
  };

  const handleOptionClickConfirm = (option) => {
    setSelectedOptionConfirm(option);
    setIsOpenConfirm(false);
    onSelect(option);
  };
  // ---------------------------------------
  // Render products based on the selected category or all products if no category is selected
  return (
    <div className={className}>
      <div className="content-nav-menu">
        <div className="dropdown">
          <button className="btn dropdown-toggle" onClick={toggleDropdown}>
            {selectedOption ? selectedOption.label : "Categories"}
            <i class="fa fa-angle-down text-dark"></i>
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              {options.map((option) => (
                <Link
                  to={`/${option.label}`}
                  class="nav-item nav-link"
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div class="container-show">
          <nav class="menu">
            <div class="menu-list">
              <Link to="/" class="nav-item nav-link active">
                Home
              </Link>
              <Link to="/sales" class="nav-item nav-link">
                sales
              </Link>
              <Link to="/productDetail" class="nav-item nav-link">
                Product Detail
              </Link>
              <div className="confirm">
                <button
                  className="btn dropdown-confirm"
                  onClick={toggleDropdownConfirm}
                >
                  {selectedOptionConfirm
                    ? selectedOptionConfirm.label
                    : "Confirm Orders"}
                  <i class="fa fa-angle-down text-dark"></i>
                </button>
                {isOpenConfirm && (
                  <div className="dropdown-menu-confirm">
                    <Link
                      to=""
                      class="nav-link-confirm"
                      key={"Payment"}
                      onClick={() => handleOptionClickConfirm("Payment")}
                    >
                      {"Payment"}
                    </Link>
                    <Link
                      to=""
                      class="nav-link-confirm"
                      key={"Shipping"}
                      onClick={() => handleOptionClickConfirm("Shipping")}
                    >
                      {"Shipping"}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <div class="container-picture ">
            <div class="picture-inner">
              <div class="picture-item ">
                <img class="img-fluid" src={homeImage} alt={Home} />
                <div className="caption">
                  <h4 class="p-text">DII MUSIC SHOP</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Dropdown.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Dropdown)`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3rem;
  display: block;
  font-family: "Poppins", sans-serif;

  .dropdown {
    position: relative;
    width: 30%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .dropdown-toggle {
    height: 65px;
    margin-top: -1px;
    padding: 0 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #d19c97;
    width: 100%;
  }

  .dropdown-menu {
    height: 410px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    align-items: flex-start;
    background-color: #f3e8ee;
  }

  .btn {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0;
  }

  .btn:hover {
    color: #f5d521;
  }

  .nav-link {
    color: rgb(19, 18, 18);
    display: block;
    padding: 0.5rem 1rem;
    padding: 8px 30px;
    text-decoration: none;
    width: 100%;
  }

  .nav-link:hover {
    color: #f77a6e;
  }

  .dropdown-confirm {
    padding: 0 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffff;
    width: 100%;
    margin-top: 7px;
  }

  @keyframes floatIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .confirm {
    position: relative;
    /* กำหนดให้เป็นพื้นที่เพื่อเข้าถึงตำแหน่งของเมนูตัวเลือก */
  }

  .confirm:hover .dropdown-menu-confirm {
    display: block;
  }

  .dropdown-menu-confirm {
    animation: floatIn 0.3s ease-in-out forwards;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    align-items: flex-start;
    position: absolute;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  .nav-link-confirm {
    color: rgb(19, 18, 18);
    display: block;
    padding: 0.5rem 1rem;
    padding: 10px 30px;
    width: 100%;
    background-color: #ffff;
  }

  .nav-link-confirm:hover {
    color: #d19c97;
  }

  /* ---------------navigator index-------------- */

  .content-nav-menu {
    border-top: 1px solid #edf1ff;
    display: flex;
    flex-direction: row;
    margin-right: 15px;
    margin-left: -15px;
  }

  .container-show {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    display: block;
  }

  .menu {
    justify-content: space-between;
    flex-basis: 100%;
    flex-grow: 1;
  }

  .menu-list {
    margin-right: auto;
    padding-bottom: 0;
    display: flex;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  /* -------------------picture---------------------------- */
  .container-picture {
    position: relative;
  }

  .picture-inner {
    position: relative;
  }

  .picture-item {
    height: 410px;
    width: 100%;
    margin-right: -100%;
    position: relative;
    overflow: hidden;
  }

  .img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
  }

  .caption {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
  }

  .p-text {
    font-weight: 500;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;
