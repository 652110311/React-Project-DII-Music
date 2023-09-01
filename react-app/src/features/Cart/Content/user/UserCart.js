import Footer from "../../Footer";
import HeadContent from "../HeadContent";
import Order from "../Order";
import React, { Fragment, useState, useEffect, useReducer } from "react";
import styled from "styled-components";


function UserCart({
  userId,
  addminId,
  status,
  user,
  editCart,
  deleteCart,
  total,
  checkOut,
  products,
  confirmOrder,
  addTrack,
  className
}) {
  return (
    
        <>
        <div className={className}>
          <div className="main-container">
            <div className="main-content">
              <HeadContent userId={userId} addminId={addminId} status={status} />
              {user.cart && user.cart.length > 0
                ? user.cart.map((order) =>
                    order.productStatus === status ? (
                      <>
                
                      <Order
                        userId={userId}
                        addminId={addminId}

                        orderId={order.orderId}
                        order={order}
                        status={status}
                        editCart={editCart}
                        deleteCart={deleteCart}
                        products={products}

                        confirmOrder={confirmOrder}
                        addTrack={addTrack}
                        
                        />
                        </>
                        
                    ) : null
                  )
                : null}
            </div>
          </div>
          </div>

          {status === "TO PAY" && userId!==addminId
            ? user.cart.map((order) =>
                order.productStatus === "TO PAY" ? (
                  <Footer
                    key={order.orderId}
                    orderId={order.orderId}
                    total={total}
                    checkOut={checkOut}
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
