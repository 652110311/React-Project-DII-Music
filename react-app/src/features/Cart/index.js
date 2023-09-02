import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserCart from "./Content/user/UserCart";
import Header from "../home/Header";
import React, { Fragment, useState, useEffect, useReducer } from "react";
import NavBar from "./NavBar";
import "../../style.css";
import axios from "axios";

function Cart({ userId, addminId, url,urlProduct }) {
  const [user, setUser] = useState([]);
  const [addmin, setAddmin] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get(`${url}/${userId}`);
        const responseAddmin = await axios.get(`${url}/${addminId}`);
        const product = await axios.get(`${urlProduct}`);
        setUser(response.data);
        setAddmin(responseAddmin.data)
        setProducts(product.data.product)

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
        
    getUserData();
  }, [userId]); 


  useEffect(() => {
    if (user.cart && user.cart.length > 0) {
      console.log("2")
      console.log(user)
      console.log(user._id)

      let sum = 0;
      user.cart.map((orders) => {
        if (orders.productStatus === "TO PAY") {
          orders.order.map((item) => {
            const product = products.find(
              (product) => product.id === item.productId
            );
            sum = sum + item.quantity * product.price;
          });
        }
      });
      setTotal(sum);
    }
  }, [user.cart]);

  async function checkOut(orderId) {
    try {
      const updatedCartUser = user.cart.map((item) => {
        if (item.orderId === orderId) {
          return { ...item, productStatus: "TO SHIP", totalPrice: total };
        }
        return item;
      });

      const itemToPushForAddmin = user.cart.find(
        (item) => item.orderId === orderId
      );

      if (itemToPushForAddmin) {
        const updatedItemToPushForAddmin = {
          userId: user._id,
          ...itemToPushForAddmin,
          totalPrice: total,
        };

        const { _id, cart, ...itemWithOutIdA } = addmin;
        await axios.put(`${url}/${addmin._id}`, {
          ...itemWithOutIdA,
          cart: [...addmin.cart, updatedItemToPushForAddmin],
        });
      }

      const { _id, cart, ...itemWithOutId } = user;

      setUser({ ...user, cart: updatedCartUser });
      await axios.put(`${url}/${user._id}`, {
        ...itemWithOutId,
        cart: updatedCartUser,
      });
    } catch (error) {
      console.error("Error checkOut cart:", error);
    }
  }

  async function editCart(orderId, productId, newQuantity) {
    try {
      const updatedCart = user.cart.map((order) => {
        if (order.orderId === orderId) {
          const updatedOrder = order.order.map((item) =>
            item.productId === productId
              ? { ...item, quantity: newQuantity }
              : item
          );
          return { ...order, order: updatedOrder };
        }
        return order;
      });

      const { _id, cart, ...itemWithOutId } = user;

      setUser({ ...user, cart: updatedCart });

      await axios.put(`${url}/${user._id}`, {
        ...itemWithOutId,
        cart: updatedCart,
      });
    } catch (error) {
      console.error("Error editing cart:", error);
    }
  }

  async function deleteCart(orderId, productId) {
    try {
      const updatedCart = user.cart.map((item) => {
        if (item.orderId === orderId) {
          const filteredOrder = item.order.filter(
            (inner) => inner.productId !== productId
          );
          return { ...item, order: filteredOrder };
        }
        return item;
      });

      const { _id, cart, ...itemWithOutId } = user;
      setUser({ ...user, cart: updatedCart });
      await axios.put(`${url}/${user._id}`, {
        ...itemWithOutId,
        cart: updatedCart,
      });
    } catch (error) {
      console.error("Error delete cart:", error);
    }
  }

  async function confirmOrder(userIdd, orderId) {
    try {
      const updatedCart = user.cart.map((item) => {
        if (item.orderId === orderId && item.userId === userIdd) {
          return { ...item, productStatus: "TO SHIP" };
        }
        return item;
      });
      setUser({ ...user, cart: updatedCart });

      const { _id, cart, ...itemWithOutId } = user;
      await axios.put(`${url}/${user._id}`, {
        ...itemWithOutId,
        cart: updatedCart,
      });
    } catch (error) {
      console.error("Error delete cart:", error);
    }
  }

  async function addTrack(userIdd, orderId, transport, track) {
    const response = await axios.get(`${url}/${userIdd}`);

    try {
      const updatedCart = response.data.cart.map((item) => {
        if (item.orderId === orderId) {
          return { ...item, transport, track, productStatus: "TO RECEIVE" };
        }
        return item;
      });

      const updatedCartA = user.cart.map((item) => {
        if (item.orderId === orderId && item.userId === userIdd) {
          return { ...item, transport, track, productStatus: "TO RECEIVE" };
        }
        return item;
      });

      if (updatedCartA) {
        const { _id, cart, ...itemWithOutId } = user;
        setUser({ ...user, cart: updatedCartA });
        await axios.put(`${url}/${user._id}`, {
          ...itemWithOutId,
          cart: updatedCartA,
        });
      }

      const { _id, cart, ...itemWithOutId } = response.data;
      await axios.put(`${url}/${userIdd}`, {
        ...itemWithOutId,
        cart: updatedCart,
      });
    } catch (error) {
      console.error("Error delete cart:", error);
    }
  }

  return (
    <>
      <Router>
        <Header />
        <NavBar />
        {products.length > 0 ? (
        <Routes>
          <>
            <Route
              path="/toPay"
              element={
                <UserCart
                  userId={user._id}
                  addminId={addmin._id}
                  status={"TO PAY"}
                  user={user}
                  editCart={editCart}
                  deleteCart={deleteCart}
                  total={total}
                  checkOut={checkOut}
                  products={products}
                  confirmOrder={confirmOrder}
                  addTrack={addTrack}
                />
              }
            />
            <Route
              path="/toShip"
              element={
                <UserCart
                  userId={user._id}
                  addminId={addmin._id}
                  status={"TO SHIP"}
                  user={user}
                  editCart={editCart}
                  deleteCart={deleteCart}
                  total={total}
                  checkOut={checkOut}
                  products={products}
                  confirmOrder={confirmOrder}
                  addTrack={addTrack}
                />
              }
            />
            <Route
              path="/toReceive"
              element={
                <UserCart
                  userId={user._id}
                  addminId={addmin._id}
                  status={"TO RECEIVE"}
                  user={user}
                  editCart={editCart}
                  deleteCart={deleteCart}
                  total={total}
                  checkOut={checkOut}
                  products={products}
                  confirmOrder={confirmOrder}
                  addTrack={addTrack}
                />
              }
            />
          </>
        </Routes>
        ):null}
      </Router>
    </>
  );
}

export default Cart;
