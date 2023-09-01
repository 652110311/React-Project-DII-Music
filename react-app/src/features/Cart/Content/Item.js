import React, { Fragment, useState, useEffect, useReducer } from "react";
import styled from "styled-components";

function Item({userId,addminId,orderId,item,status,editCart,deleteCart,className,products}) {

  const product = products.find(product => product.id === item.productId);
  const productImage = require(`../../../assets/${product.imageURL[0]}`);
  const [quantity, setQuantity] = useState(item.quantity);
  
  const addQuantity = () => {
    setQuantity(quantity + 1);
    editCart(orderId,item.productId,quantity+1)
  };

  function deleteItem (){
    deleteCart(orderId,item.productId)
  }

  const deleteQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      editCart(orderId,item.productId,quantity-1)
    }else{
      deleteCart(orderId,item.productId)
    }
  };

  return (
    <>
    <div className={className}>
      <li className="item">
        <div className="left-item">
            <img className="pic"  src={productImage} alt={item.name}/>
            <div className="description">
              <p className="name-product">{product.name}</p>
            </div>
        </div>
        <div className="right-item" >
              <p style={{ width: "87px" }}>{product.price}</p>
            <div className="number-input" style={{ width: "90px" }}>
              {status==="TO PAY" && userId!==addminId ?(
                <>
                  <button className="minus" onClick={deleteQuantity}>-</button>
                  <input
                  className="number"
                  type="text"
                  min="0"
                  max="100"
                  value={quantity}
                  style={{ textAlign: "center",width: "30px"}}
                  />
              <button className="plus"onClick={addQuantity}>+</button>
              </>
              ): <p style={{ width: "82px" }}>{quantity}</p>}
            </div>
              <p style={{ width: "100px" }}>{product.price*quantity}</p>
              
          
            {status==="TO PAY" && userId!==addminId ?(
              <>
              <div className="delete">
                <button onClick={deleteItem} style={{ margin: "0 16px 0 16px" }}>x</button>
              </div>
              </>
            ):null}
          
        </div>
      </li>
      </div>

    </>
  );
}


export default styled(Item)`

*{
  font-family: sans-serif;
}

p{
  display: flex;
  justify-content: center;
  margin-bottom: 0;
}
.name-product{
  font-size: 16px;
  margin: 20px;
  width: 200px;
}
.description{
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.item-container{
    display: flex;
    justify-content: center;
}
.item-content{
    margin-top: 14px;
    width: 1000px;
   
}
.item{
  border-right: 1px solid #666;
  border-left: 1px solid #666;
}


.left-item,.right-item{
    display: flex;
}
.left-item{
    margin-left: 60px;
}
.right-item{
    display: flex;
    align-items: center;
    justify-content:right;
    width: 500px;
    margin-right: 65px;
    justify-content: space-between;
}
.pic{
    background-color: #000;
    width: 100px;
    height: 100px;
}
.item{
    display: flex;
    align-items: center;
    width: 1000px;
    justify-content: space-between;
    background-color: #fff;
    padding-bottom: 7px;
}

.number{
    width: 30px;
    height: 30px;
    border: 0;
    background-color: #EDF1FF;
}
.check{
    margin-right: 10px;
}
button{
  background-color: #d19c97;
  border: 0;
  width: 30px;
  height: 30px;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s ease-in-out;
}

button:hover {
  color: white;
}
`


