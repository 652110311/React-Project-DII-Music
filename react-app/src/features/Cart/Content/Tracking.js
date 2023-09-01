import React from "react";
import styled from "styled-components";

function Tracking({transport,track,className}) {

  return (
    <>
    <div className={className}>
        <div className='btn-container'>
            <div className="btn-content">
                    TRANSPORT : {transport} &nbsp;&nbsp;&nbsp;&nbsp; TRACK : {track}
            </div>
        </div>
    </div>
         
    </>
    );
}


export default styled(Tracking)`

*{
    font-weight: bold;
    color: black;
}

.btn-content{
    background-color: #D19C97;
    width: 1000px;
    height: 48px;
    display: flex;
    justify-content:end;
    align-items: center;
    padding-right: 60px;
}

`

