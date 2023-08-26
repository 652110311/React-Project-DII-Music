import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import userData from "./app/userData";
import UserToPay from "./features/Cart/Content/user/UserToPay";
import UserCompleted from "./features/Cart/Content/user/UserCompleted";
import UserToShip from "./features/Cart/Content/user/UserToShip";
import UserToReceive from "./features/Cart/Content/user/UserToReceive";
import Header from "./features/Cart/Header";
import AddminToPay from "./features/Cart/Content/addmin/AddminToPay"
import AddminToShip from "./features/Cart/Content/addmin/AddminToShip"
import AddminToReceive from "./features/Cart/Content/addmin/AddminToReceive"
import AddminCompleted from "./features/Cart/Content/addmin/AddminCompleted"
import React, { Fragment, useState, useEffect, useReducer } from "react";
import dataProduct from "./app/productData";
import axios from 'axios';

function App() {

  const idUser = 1;
  
  const [users, setUsers] = useState(userData[idUser]);
  const [cart, setCart] = useState(users.cart);
  const [total,setTotal] = useState(cart.price)

  const [addmin, setaddmin] = useState(userData[0]);
  const [cartA, setCartA] = useState(addmin.cart);


  useEffect(() => {
    let sum = 0;
    cart.map((orders) => {
      if (orders.productStatus === "TO PAY") {
        return orders.order.map((item) => {
          const product = dataProduct.find((product) => product.id === item.productID);
          return (sum = sum + (item.quantity * product.price));
        });
      }
      return 0;
    });
    setTotal(sum);
  }, [cart]);

  function checkOut(Id) {
    const updatedCart = cart.map((item) => {
      if (item.orderId === Id) {
        return { ...item, productStatus: "TO SHIP", totalPrice: total };
      }
      return item;
    });
    const itemToPush = cart.find(item => item.orderId === Id);
    if (itemToPush) {
      const updatedItemToPush = { userId:idUser,...itemToPush, totalPrice: total };
      setCartA([...cartA, updatedItemToPush]);
    }
    setCart(updatedCart);
  }

  function editCart(orderId, idProduct, newQuantity) {
    const updatedCart = cart.map((order) => {
      if (order.orderId === orderId) {
        const updatedOrder = order.order.map((item) =>
          item.productID === idProduct ? { ...item, quantity: newQuantity } : item
        );
        return { ...order, order: updatedOrder };
      }
      return order;
    });
    setCart(updatedCart);
  }

  function deleteCart(orderId, idProduct) {
    const updatedCart = cart.map((item) => {
      if (item.orderId === orderId) {
        const filteredOrder = item.order.filter((inner) => inner.productID !== idProduct);
        return { ...item, order: filteredOrder };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function confirmOrder (userID,orderID){
    const updatedCartA = cartA.map((item) => {
      if (item.orderId === orderID && item.userID === userID) {
        return { ...item, productStatus: "TO SHIP" };
      }
      return item;
    });
    setCartA(updatedCartA);
  }

  return (
    <>
      <Header />
      <Router>
        <div className="navbar-container">
          <div className="navbar-content">
            <Link className="a-navbar" to="/toPay">
              TO PAY
            </Link>
            <Link className="a-navbar" to="/toShip">
              TO SHIP
            </Link>
            <Link className="a-navbar" to="/toReceive">
              TO RECEIVE
            </Link>

            <Link className="a-navbar" to="/toPayA">
              TO PAYA
            </Link>
            <Link className="a-navbar" to="/toShipA">
              TO SHIPA
            </Link>
            <Link className="a-navbar" to="/toReceiveA">
              TO RECEIVEA
            </Link>
            
            
          </div>
        </div>
        <Routes>
          
            <>
              <Route path="/toPayA" element={<AddminToPay cartA={cartA} confirmOrder={confirmOrder} />} />
              <Route path="/toShipA" element={<AddminToShip cartA={cartA} />} />
              <Route
                path="/toReceiveA"
                element={<AddminToReceive cartA={cartA} />}
              />
              <Route
                path="/toCompleted"
                element={<AddminCompleted cartA={cartA} />}
              />
    
              <Route path="/toPay" element={<UserToPay cart={cart} editCart={editCart} deleteCart={deleteCart} total={total} checkOut={checkOut}/>} />
              <Route path="/toShip" element={<UserToShip cart={cart}  />} />
              <Route
                path="/toReceive"
                element={<UserToReceive cart={cart} />}
              />
              <Route
                path="/toCompleted"
                element={<UserCompleted cart={cart} />}
              />
            </>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
