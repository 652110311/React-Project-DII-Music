import React from "react";
import "../../cart.css";

import HeadContent from "../HeadContent";
import Order from "../Order";
import AddminOrder from "./AddminOrder";

function AddminCart({ status, cartA, confirmOrder, addTrack, products }) {
  return (
    <>
      <div className="main-container">
        <div className="main-content">
          <HeadContent status={status} />
          {cartA.length > 0
            ? cartA.map((order) =>
                order.productStatus === status ? (
                  <AddminOrder
                    order={order}
                    status={status}
                    confirmOrder={confirmOrder}
                    addTrack={addTrack}
                    products={products}
                  />
                ) : null
              )
            : null}
        </div>
      </div>
    </>
  );
}

export default AddminCart;
