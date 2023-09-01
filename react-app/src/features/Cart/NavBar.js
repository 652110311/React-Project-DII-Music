import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";


function NavBar({className}) {
  return (
    <>
    <div className={className}>
      <div className="navbar-container">
          <div className="navbar-content">
            <Link to="/toPay">PAY</Link>
            <Link to="/toShip">SHIP</Link>
            <Link to="/toReceive">RECEIVE</Link>
          </div>
        </div>
    </div>
    </>
  );
}


export default styled(NavBar)`

*{
    font-weight: bold;
    color: black;
}
  
.navbar-container{
    display: flex;
    justify-content: center;
}
.navbar-content{
    width: 1129px;
    height: 48px;
    background-color: aqua;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 14px;
    background-color: #EDF1FF;
}
`
