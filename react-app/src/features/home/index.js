
import Topbar from './Topbar';
import Navbar from './Navbar';
import Featured from './Featured';
import Categories from './Categories';
import Product from './Product';
import Footer from './Footer';
import React, { useState } from "react";
import dataProduct from "../../app/productData";
import styled from "styled-components";
import './GlobalStyle.css' ;// import './index.css';;
import PropTypes from "prop-types";

function Home({products,user,setUser,url,className}) {

  return (
    <>

      <Topbar user={user} setUser={setUser}/>
      <Navbar />
      <Featured />
    

      <div className="container-fluid pt-5">
    <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2"> Products</span></h2>
    </div>
      
      <ul class="d-flex justify-content-center flex-wrap mr-2">
        {products.map((product)=>(<Product key={product.id} item={product} user={user} setUser={setUser} url={url} />))}
        
      </ul>
     </div>
      <Footer />
      </>
      
  );
}

export default Home;


