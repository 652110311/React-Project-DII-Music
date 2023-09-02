import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
function Navbar({ className }) {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>DII MUSIC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Free HTML Templates" />
        <meta name="description" content="Free HTML Templates" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link rel="icon" href="img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="lib/owlcarousel/assets/owl.carousel.min.css"
        />
        <link rel="stylesheet" href="css/style.css" />
      </head>

      <div class={className}>
        <div class="topbar">
          <div class="topbar-left">
            <div class="topbar-left-content">
              <a class="text-dark" href="">
                FAQs
              </a>
              <span class="text-muted ">|</span>
              <a class="text-dark" href="">
                Help
              </a>
              <span class="text-muted ">|</span>
              <a class="text-dark" href="">
                Support
              </a>
            </div>
          </div>
          <div class="topbar-right">
            <div class="topbar-right-content">
              <a class="text-dark text-muted " href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-dark text-muted" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-dark text-muted" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="text-dark text-muted" href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="text-dark text-muted" href="">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="navigator">
          <div class="logo">
            <a href="">
              <h1 class="logo-name">
                <span class="logo-sign">D</span>
                DII MUSIC
              </h1>
            </a>
          </div>
          <div class="search">
            <form action="">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for products"
                />
                <div class="input-group-append">
                  <span class="search-icon">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>

          <div class="admin">
            <a href="" class="icon-user">
              <i class="fas fa-user"></i>
              <span class="badge">Admin</span>
            </a>
            <a href="" class="icon-out">
              <i className="fas fa-sign-out-alt"></i>
              <span class="badge"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Navbar)`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  .topbar {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background-color: #edf1ff;
    display: flex;
    flex-direction: row;
  }

  .topbar-left,
  .topbar-right {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .topbar-left-content {
    align-items: center;
    display: inline-flex;
  }

  .topbar-right-content {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .text-dark {
    color: #1c1c1c;
  }

  a {
    color: #d19c97;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
  }

  .text-muted {
    color: #6c757d;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  /* navigator */
  .navigator {
    padding-bottom: 1rem;
    padding-top: 1rem;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  /*--logo zone*/
  .logo {
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .logo-name {
    font-weight: 600;
    margin: 0;
    line-height: 1.2;
    color: #1c1c1c;
    text-align: center;
    padding: 0;
  }

  .logo-sign {
    color: #d19c97;
    font-weight: 700;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 0.25rem;
    border: 1px solid #edf1ff;
  }

  /*--search zone*/
  .search {
    text-align: left;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    display: block;
    box-sizing: border-box;
  }

  form {
    max-width: 100%;
    margin: 50px;
    border: 1px solid #ddd;
    padding: 30px;
    border-radius: 5px;
    background-color: #f9f9f9;
    display: block;
    text-align: left;
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    text-align: left;
  }

  .input-group > .form-control,
  .input-group > .form-control-plaintext,
  .input-group > .custom-select,
  .input-group > .custom-file {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
    margin-bottom: 0;
  }

  input[type="text"],
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .form-control {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    height: calc(1.5em + 0.75rem + 2px);
  }

  input {
    overflow: visible;
    margin: 0;
    font-family: inherit;
    box-sizing: border-box;
    cursor: text;
  }

  input:not([type="range"]):not([type="color"]):not([type="button"]):not(
      [type="reset"]
    ):not([type="submit"]):not([type="file"]) {
    writing-mode: horizontal-tb !important;
  }

  .input-group-append {
    margin-left: -1px;
    display: flex;
    text-align: left;
  }

  .search-icon {
    color: #d19c97;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #edf1ff;
  }

  .search-icon:hover {
    color: #f77a6e;
    background-color: transparent;
    display: flex;
  }

  .admin {
    text-align: right;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    display: block;
    flex: 0 0 20%;
    max-width: 50%;
  }

  .icon-user,
  .icon-out {
    cursor: pointer;
    border: 1px solid #edf1ff;
    transition: none;
    display: inline-block;
    font-weight: 400;
    color: #d19c97;
    text-align: center;
    vertical-align: middle;
    background-color: transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0;
    margin: 5px;
  }

  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    box-sizing: border-box;
  }
`;
