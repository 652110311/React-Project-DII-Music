import React, { Fragment, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Tracking from "../Tracking";

function AddminBtn({userIdd,orderId,status,transport,track,confirmOrder,addTrack,className}) {

  const [addTracking,setAddTracking] = useState('');
  const [addTransport,setAddTransport] = useState('J&T');

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
              <div className="see-order-content">
                <button onClick={toConfirmOrder}>SEE ORDER</button>
              </div>
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

*{
    font-weight: bold;
    color: black;
}
.see-order-content,.tracking{
    width: 1000px;
    height: 48px;
    background-color: #D19C97;
    display: flex;
    justify-content:end;
    align-items: center;
    padding-right: 60px;
}
select{
  height: 29.2px;
}
.btn{
  background-color: #ffffff;
  height: 29.2px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #000;
  margin-left: 10px;
}
`
