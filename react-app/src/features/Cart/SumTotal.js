import React from "react";
import styled from "styled-components";


function SumTotal({total,className }) {

  return (
    <>
    <div className={className}>
      <div class='sum-container'>
            <div className="sum-content">
                TOTAL&nbsp;&nbsp;&nbsp;&nbsp;${total}
            </div>
        </div>
    </div>
     
    </>
  );
}

export default styled(SumTotal)`

*{
    font-weight: bold;
    color: black;
}
  
.sum-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.sum-content{
    width: 1000px;
    height: 48px;
    background-color: #D19C97;
    display: flex;
    justify-content:end;
    align-items: center;
    padding-right: 60px;
}

`
