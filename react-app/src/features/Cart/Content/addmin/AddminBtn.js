import React, { Fragment, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Tracking from "../Tracking";
import { Link } from "react-router-dom";

function AddminBtn({user,userIdd,orderId,status,transport,track,confirmOrder,addTrack,className}) {

  const [addTracking,setAddTracking] = useState('');
  const [addTransport,setAddTransport] = useState('J&T');

  const addressData = user.cart.find(orders => orders.userId === userIdd && orders.orderId === orderId);
  

  function toConfirmOrder(){
    confirmOrder(userIdd,orderId)
  }

  function onSubmit(event) {
    event.preventDefault();
    addTrack(userIdd,orderId,addTransport,addTracking)
  }

  return (
    <>
      <div className={className}>

          {status === "TO PAY" ? (
            <>
              <div className="see-order-content">
                <button onClick={toConfirmOrder}>CONFIRM</button>
              </div>

              <div className="address">
                <p>FRISTNAME : {addressData.address.firstname}</p>
                <p>LASTNAME : {addressData.address.lastname}</p>
                <p>EMAIL : {addressData.address.email}</p>
                <p>MOBILE : {addressData.address.mobile}</p>
              </div>
              <div className="address-1">
               <p>ADDRESS : {addressData.address.address}</p>
                <p>CITY : {addressData.address.city}</p>
                <p>STATE : {addressData.address.state}</p>
                <p>ZIP : {addressData.address.zip}</p>
                </div>
              <div className="showimg">
              <img src={addressData.address.img}></img>
              </div>
            </>
          ) : status === "TO SHIP" ? (
            <>
            <form  onSubmit={onSubmit}>
              <div className="tracking">
                <div className="transport">
                  <select id="transport" name="transport" value={addTransport} onChange= {(event) =>{setAddTransport (event.target.value)}}>
                    <option value="J&T">J&T</option>
                    <option value="KERRY">KERRY</option>
                    <option value="THAI POST">THAI POST</option>
                    <option value="FRASH">FRASH</option>
                  </select>
                  <input className="input-track" value={addTracking} onChange= {(event) =>{setAddTracking (event.target.value)}} />
                </div>
                <div className="btn-track">
                  <button type="submit" className="btn">OK</button>
                </div>
              </div>
              </form>
              </>
          
          ) : status === "TO RECEIVE" ? (

              <Tracking transport={transport} track={track}/>

          ) : null}
        </div>
      
    </>
  );
}


export default styled(AddminBtn)`
  * {
    font-weight: bold;
    color: black;
  }
  .see-order-content,
  .tracking {
    width: 1000px;
    height: 48px;
    background-color: #d19c97;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 60px;
  }
  select {
    height: 29.2px;
  }
  .btn {
    background-color: #ffffff;
    height: 29.2px;
    display: flex;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #000;
    margin-left: 10px;
  }
  .address {
    margin-top: 20px;
    margin-left: 50px;
    float: left;
    font-family: "Poppins", sans-serif;
    font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  .address-1 {
    margin-top: 20px;
    margin-left: 400px;
    font-family: "Poppins", sans-serif;
    font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  .showimg {
    margin-top: 20px;
    margin-left: 50px;
    clear: both; 
  }

  .address, .address-1 {
    flex-direction: column;
    
  }
`;

