import React, { useState, useEffect, useContext } from "react";
import Home from "./features/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShopDetail from "./features/home/product/ShopDetail";
import axios from "axios";
import Login from "./features/login/Login";
import Address from "./features/payment/Address";
import Create from "./features/login/Create";
import UserCart from "./features/Cart/Content/user/UserCart";
import Admin from "./features/Admin";

function App() {
  const urlProduct = `https://crudcrud.com/api/7970d58fde944d3fa75613740440f88f/product/64f5ea254c636203e8770847`;
  const url = `https://crudcrud.com/api/7970d58fde944d3fa75613740440f88f/user`;
  const urlAddmin = `https://crudcrud.com/api/7970d58fde944d3fa75613740440f88f/user/64f5ea9f4c636203e8770848`;
  const [user, setUser] = useState("");
  const [addmin, setAddmin] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(urlProduct);
      const addmin = await axios.get(urlAddmin);
      setAddmin(addmin.data);
      setProducts(products.data.product);
      console.log(user);
    }
    getProducts();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                user={user}
                setUser={setUser}
                url={url}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ShopDetail
                products={products}
                user={user}
                setUser={setUser}
                url={url}
              />
            }
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} url={url} />}
          />
          <Route
            path="/address"
            element={
              <Address
                user={user}
                setUser={setUser}
                url={url}
                urlAddmin={urlAddmin}
                addmin={addmin}
                products={products}
              />
            }
          />
          <Route
            path="/create-account"
            element={
              <>
                {" "}
                <Create url={url} />{" "}
              </>
            }
          />
          <Route
            path="/ToPay"
            element={
              <UserCart
                status={"TO PAY"}
                user={user}
                addmin={addmin}
                products={products}
                url={url}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/ToShip"
            element={
              <UserCart
                status={"TO SHIP"}
                user={user}
                addmin={addmin}
                products={products}
                url={url}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/ToReceive"
            element={
              <UserCart
                status={"TO RECEIVE"}
                user={user}
                addmin={addmin}
                products={products}
                url={url}
                setUser={setUser}
              />
            }
          />
          <Route path="/Admin/*" element={<Admin />} />
        </Routes>
      ) : (
        <div>Loading products....</div>
      )}
    </>
  );
}

export default App;
