import Footer from "../../Footer";
import HeadContent from "../HeadContent";
import Order from "../Order";
import React, { Fragment, useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import axios from "axios";
import Topbar from "../../../home/Topbar";
import Navbar from "../../../Cart/NavBar";


function UserCart({
  status,
  user,
  addmin,
  products,
  url,
  setUser,
  className
}) {


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



  async function editCart( productId, newQuantity, newTotal) {
    try {
      let newCart;
      console.log(newTotal);
      const cartToPay = user.cart.find((item) => item.productStatus === "TO PAY");
  
      if (cartToPay) {
        const orderInCart = cartToPay.order.find((orderItem) => orderItem.productId === productId);

        if (orderInCart) {
          newCart = {
            ...cartToPay,
            order: cartToPay.order.map((orderItem) =>
              orderItem.productId === productId
                ? { ...orderItem, quantity: newQuantity }
                : orderItem
            ),
            totalPrice: newTotal
          };
        } 
      setUser({ ...user, cart: [newCart] });
      const { _id, cart, ...itemWithOutId } = user;
      await axios.put(`${url}/${user._id}`, { ...itemWithOutId, cart: [newCart] });
    }
  
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }
  

  async function deleteCart(orderId, productId,newTotal) {
    try {
      const updatedCart = user.cart.map((item) => {
        if (item.orderId === orderId) {
          const filteredOrder = item.order.filter(
            (inner) => inner.productId !== productId
          );
          return { ...item, order: filteredOrder, totalPrice:newTotal };
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
        <Topbar user={user} setUser={setUser}/>
        <Navbar/>
        <div className={className}>
          <div className="main-container">
            <div className="main-content">
              <HeadContent userId={user._id} addminId={addmin._id} status={status} />
              {user.cart.length > 0
                ? user.cart.map((order) =>
                    order.productStatus == status ? (
                      <>
                
                      <Order
                        user={user}
                        userId={user._id}
                        addminId={addmin._id}

                        orderId={order.orderId}
                        order={order}
                        status={status}
                        editCart={editCart}
                        deleteCart={deleteCart}
                        products={products}

                        confirmOrder={confirmOrder}
                        addTrack={addTrack}
                        total = {order.totalPrice}
                        />

                        </>
                        
                    ) : null
                  )
                : null}
            </div>
          </div>
          </div>

          {status === "TO PAY" && user._id!==addmin._id
            ? user.cart.map((order) =>
                order.productStatus === "TO PAY" ? (
                  <Footer
                    key={order.orderId}
                    orderId={order.orderId}
                    total={order.totalPrice}
                 
                  />
                ) : null
              )
            : null}
        </>
     
      
  );
}

export default styled(UserCart)`

  .main-container{
    display: flex;
    justify-content: center;
  }

  .main-content{
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
  }

`
