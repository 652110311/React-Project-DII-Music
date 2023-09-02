import React from "react";
import styled from "styled-components";
function HeadContent({userId,addminId,className,status}) {
  return (
    <div className={className}>
    <div class="head-container">
      <div className="head-content">
        <div className="head-content-l">
          <div>ORDER</div>
        </div>
        <div className="head-content-r">
          <div>UNIT PRICE</div>
          <div  style={{ textAlign: "center",width: "90px"}}>QUANTITY</div>
          <div>TOTAL PRICE</div>
          {status==="TO PAY" && userId!== addminId ?(
            <div>ACTION</div>
          ):null}
        </div>
      </div>
    </div>
    </div>
  );
}

export default styled(HeadContent)`

*{
    font-weight: bold;
    color: black;
}

.head-container{
    display: flex;
    justify-content: center;
}
.head-content{
    margin-top: 24px;
    background-color: #EDF1FF;
    width: 1000px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    
}

.head-content-r{
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-between;
    width: 500px;
    margin-right: 65px;
}
.head-content-l{
    display: flex;
    align-items: center;
    margin-left: 65px;
}
`
