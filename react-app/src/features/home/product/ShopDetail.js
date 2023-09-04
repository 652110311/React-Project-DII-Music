import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import Topbar from "../Topbar";
import axios from "axios";
import React, { useState,useEffect } from "react";
function ShopDetail({ products, user, setUser,url,total }) {

  const { id } = useParams();
  const product = products.find((product) => product.id == id);
  const productImage = require(`../../../assets/${product.imageURL}`);
  const productSound = require(`../../../assets/${product.sound}`);
  const home1 = require(`../../../assets/1.png`);
  const home2 = require(`../../../assets/2.png`);
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1);
    
};

const deleteQuantity = () => {
if (quantity > 1) {
    setQuantity(quantity - 1);
}
};


async function addCart() {
try {
  let newCart;
  const { _id, cart, ...itemWithOutId } = user;
  const cartToPay = user.cart.find((item) => item.productStatus === "TO PAY");

  if (cartToPay) {
    const orderInCart = cartToPay.order.find((orderItem) => orderItem.productId === product.id);
    const filteredCart = user.cart.filter(
      (inner) => inner.productStatus !== "TO PAY"
    );
    
    if (orderInCart) {
      // หากมีสินค้าที่มี productId เดียวกับ product.id ในตะกร้าให้เพิ่มปริมาณ
      newCart = [...filteredCart,{
        ...cartToPay,
        order: cartToPay.order.map((orderItem) =>
          orderItem.productId === product.id
            ? { ...orderItem, quantity: orderItem.quantity + quantity }
            : orderItem
        ),
        totalPrice: cartToPay.totalPrice+(product.price*quantity)
      }];
    } else {
      // หากไม่มีสินค้าในตะกร้าที่มี productId เดียวกับ item.id ให้เพิ่มสินค้าใหม่
      newCart = [...filteredCart,{
        ...cartToPay,
        order: [...cartToPay.order, { productId: product.id, quantity: quantity }],
        totalPrice: cartToPay.totalPrice+(product.price*quantity)
      }];
    }
  } else {
    // ถ้าไม่มีสินค้าใน cartToPay ให้สร้างตะกร้าใหม่
    newCart = [...cart,{
      orderId: user.cart.length + 1,
      order: [{ productId: product.id, quantity: quantity }],
      productStatus: "TO PAY",
      totalPrice: (product.price*quantity)
    }];
  }

  setUser({ ...user, cart: newCart });
  await axios.put(`${url}/${user._id}`, { ...itemWithOutId, cart: newCart});

} catch (error) {
  console.error("Error adding to cart:", error);
}
}

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner border">
                <div className="carousel-item active">
                  <img className="img-fluid w-100" src={home1}alt="" />
                </div>
                <div className="carousel-item">
                  <img className="img-fluid w-100" src={home2}alt="" />
                </div>
                <div className="carousel-item">
                  <img className="img-fluid w-100" src={home1}alt="" />
                </div>
                <div className="carousel-item">
                  <img className="img-fluid w-100" src={home2}alt="" />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#product-carousel"
                data-slide="prev"
              >
                <i className="fa fa-2x fa-angle-left text-dark"></i>
              </a>
              <a
                className="carousel-control-next"
                href="#product-carousel"
                data-slide="next"
              >
                <i className="fa fa-2x fa-angle-right text-dark"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">{product.name}</h3>
            <div className="d-flex mb-3">
              <div className="text-primary mr-2">
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star-half-alt"></small>
                <small className="far fa-star"></small>
              </div>
              <small className="pt-1">(50 Reviews)</small>
            </div>
            <h3 className="font-weight-semi-bold mb-4">฿{product.price}</h3>
            <p className="mb-4">{product.description.product}</p>
            <div className="d-flex mb-3">
              <p className="text-dark font-weight-medium mb-0 mr-3">Sound:</p>
              <div>
            <audio controls>
              <source src={productSound} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
            </div>
            <div className="d-flex mb-4">
              <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
              <form>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-1"
                    name="color"
                  />
                  <label className="custom-control-label" for="color-1">
                    Black
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-2"
                    name="color"
                  />
                  <label className="custom-control-label" for="color-2">
                    White
                  </label>
                </div>
              </form>
            </div>
            <div className="d-flex align-items-center mb-4 pt-2">
              <div
                className="input-group quantity mr-3"
                style={{ width: "130px" }}
              >
                <div className="input-group-btn">
                  <button onClick={deleteQuantity} className="btn btn-primary btn-minus">
                    <i className="fa fa-minus"></i>
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control bg-secondary text-center"
                  value={quantity}
                />
                <div className="input-group-btn">
                  <button onClick={addQuantity} className="btn btn-primary btn-plus">
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
              <button onClick={addCart} className="btn btn-primary px-3">
                <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
              </button>
            </div>
            <div className="d-flex pt-2">
              <p className="text-dark font-weight-medium mb-0 mr-2">
                Share on:
              </p>
              <div className="d-inline-flex">
                <a className="text-dark px-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-dark px-2" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="text-dark px-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-dark px-2" href="">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <div className="nav nav-tabs justify-content-center border-secondary mb-4">
              <a
                className="nav-item nav-link active"
                data-toggle="tab"
                href="#tab-pane-1"
              >
                Description
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#tab-pane-2"
              >
                Information
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#tab-pane-3"
              >
                Reviews (0)
              </a>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <h4 className="mb-3">Product Description</h4>
                <p>
                  Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                  sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
                  Vero diam ea vero et dolore rebum, dolor rebum eirmod
                  consetetur invidunt sed sed et, lorem duo et eos elitr,
                  sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                  tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                  eos dolores sit no ut diam consetetur duo justo est, sit
                  sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                  accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                  invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                  takimata dolor ea invidunt.
                </p>
                <p>
                  Dolore magna est eirmod sanctus dolor, amet diam et eirmod et
                  ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem
                  tempor. Gubergren amet amet labore sadipscing clita clita diam
                  clita. Sea amet et sed ipsum lorem elitr et, amet et labore
                  voluptua sit rebum. Ea erat sed et diam takimata sed justo.
                  Magna takimata justo et amet magna et.
                </p>
              </div>
              <div className="tab-pane fade" id="tab-pane-2">
                <h4 className="mb-3">Additional Information</h4>
                <p>
                  Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                  sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
                  Vero diam ea vero et dolore rebum, dolor rebum eirmod
                  consetetur invidunt sed sed et, lorem duo et eos elitr,
                  sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                  tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                  eos dolores sit no ut diam consetetur duo justo est, sit
                  sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                  accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                  invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                  takimata dolor ea invidunt.
                </p>
                  </div>
                </div>
              </div>                      
                      </div>
                    </div>
                 
      <Footer />
    </>
  );
}

export default ShopDetail;
