import React from "react";
import styled from "styled-components"; 


function Checkout({className}) {
  const containerStyle = {
    backgroundColor: "secondary",
    marginBottom: "5px",
  };

  const contentStyle = {
    minHeight: "300px",
  };

  return (
    <>
    <div className={className}>
    <div className="container-fluid bg-secondary mb-5" style={containerStyle}>
      <div className="d-flex flex-column align-items-center justify-content-center" style={contentStyle}>
        <h1 className="font-weight-semi-bold text-uppercase mb-3">Checkout</h1>
        <div className="d-inline-flex">
          <p className="m-0">Home</p>
          <p className="m-0 px-2">-</p>
          <p className="m-0">Checkout</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default styled(Checkout)`
.d-inline-flex {
  display: inline-flex !important;
}

.m-0 {
  margin: 0 !important;
}

`
