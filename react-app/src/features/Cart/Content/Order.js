import React, { useState } from "react";
import Item from "./Item";
import SumTotal from "../SumTotal";
import Tracking from "./Tracking";
import AddminBtn from "./addmin/AddminBtn";
import styled from "styled-components";

function Order({user,userId,addminId,orderId,order,status,editCart,deleteCart,products,confirmOrder,addTrack,total,className}) {

  return (
    <>

    <div className={className}>

      <ul className="order-list">
        {order.order.map((item) => (
          <Item key={item.productId} userId={userId} addminId={addminId} orderId={orderId} item={item} status={status} editCart={editCart} deleteCart={deleteCart} products={products} total={total} />
        ))}
     
        {
          userId==addminId?(
            <>
              <SumTotal total={order.totalPrice}/>
              <AddminBtn user={user} userIdd={order.userId} orderId={order.orderId} status={status} transport={order.transport} track={order.track} confirmOrder={confirmOrder} addTrack={addTrack}/>
            </>
          ):status!=="TO PAY" && userId!==addminId?(
            <SumTotal total={order.totalPrice}/>

          ):status==="TO RECEIVE"?(
            <Tracking orderId={orderId} transport={order.transport} track={order.track}  />
          ) : null
        }
      </ul>

      </div>


    </>
  );
}

export default styled(Order)`

  .order-list{
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #666;
    width: 1000px;
    margin-top: 14px;
    padding-top: 14px;
  }
  ul{
    margin: 0;
    padding: 0;
  }

`
