import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Featured from './Featured';
import Categories from './Categories';
import Products from './Products';
import Footer from './Footer';



function Home() {
  return (
    <div>

      <Topbar />
      <Navbar />
      <Featured />
      <Categories />
      <Products />
      <Footer />

      
    </div>
  );
}

export default Home;
