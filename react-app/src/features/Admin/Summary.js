import React, { useState, useEffect } from "react";
import dataProduct from "../../app/productData";
import userData from "../../app/userData";
import styled from "styled-components";
import PropTypes from "prop-types";

function Summary({ className }) {
  const [totalSales, setTotalSales] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [productsInStock, setProductsInStock] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);

  useEffect(() => {
    // Calculate total sales for orders with productStatus: "TO RECEIVE"
    const sales = userData.reduce((total, user) => {
      return (
        total +
        user.cart
          .filter((order) => order.productStatus === "TO RECEIVE")
          .reduce((orderTotal, order) => orderTotal + order.totalPrice, 0)
      );
    }, 0);
    setTotalSales(sales);

    // Calculate total orders
    const orders = userData.reduce(
      (total, user) => total + user.cart.length,
      0
    );
    setTotalOrders(orders);

    // Calculate products in stock
    const stock = dataProduct.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setProductsInStock(stock);

    // Calculate total customers
    const customers = userData.length;
    setTotalCustomers(customers);
  }, []);
  return (
    <>
      <div class={className}>
        <div class="content-summary">
          <div class="summary-item">
            <div class="summary-text">
              <h1 class="fa fa-coins text-primary m-0 mr-3"></h1>
              <h5 class="font-weight-semi-bold m-0">Total Sales</h5>
            </div>
            <h2 className="sales">{totalSales}</h2>
          </div>
          <div class="summary-item">
            <div class="summary-text">
              <h1 class="fa fa-shopping-cart text-primary m-0 mr-2"></h1>
              <h5 class="font-weight-semi-bold m-0">All Orders</h5>
            </div>
            <h2 className="orders">{totalOrders}</h2>
          </div>
          <div class="summary-item">
            <div class="summary-text">
              <h1 class="fas fa-tag text-primary m-0 mr-3"></h1>
              <h5 class="font-weight-semi-bold m-0">Products in Stock</h5>
            </div>
            <h2 className="sales">{productsInStock}</h2>
          </div>
          <div class="summary-item">
            <div class="summary-text">
              <h1 class="fa fa-user text-primary m-0 mr-3"></h1>
              <h5 class="font-weight-semi-bold m-0">All Customers</h5>
            </div>
            <h2 className="sales">{totalCustomers}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

Summary.propTypes = {
  className: PropTypes.string.isRequired,
};
export default styled(Summary)`
  padding-top: 3rem;
  width: 90%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: block;

  .content-summary {
    padding-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .summary-item {
    padding-bottom: 0.25rem;
    max-width: 25%;
    position: relative;
    width: 20%;
    padding-right: 15px;
    padding-left: 15px;
    border: 1px solid #edf1ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .summary-text {
    padding: 30px;
    display: flex;
    align-items: center;
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

  .mr-3,
  .mx-3 {
    margin-right: 1rem !important;
  }

  .m-0 {
    margin: 0 !important;
  }

  .font-weight-semi-bold {
    font-weight: 600;
  }

  h5,
  .h5 {
    padding-left: 20px;
    font-size: 1.25rem;
    color: #1c1c1c;
    display: block;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h2 {
    margin: 0;
    margin-bottom: 10px;
    color: #f77a6e;
  }
`;
