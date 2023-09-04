import {React , useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const homeImage1 = require(`../../assets/1.png`);
  const homeImage2 = require(`../../assets/2.png`);
  const [currentSlide, setCurrentSlide] = useState(0);

  // สร้างฟังก์ชันเพื่อเปลี่ยนสไลด์
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <>
    <div className="container-fluid mb-5 d-flex justify-content-center">
        
     
        <div className="col-lg-9 ">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">E</span>
                EShopper
              </h1>
            </a>
            
          </nav>


          <div id="header-carousel" className="carousel slide" data-ride="carousel" >
            <div className="carousel-inner">
            <div style={{ height: '410px' }} className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`} >
                <img className="img-fluid w-100" src={homeImage1}alt="" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: '700px' }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">WELCOME TO</h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">DII MUSIC</h3>
                    <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                  </div>
                </div>
              </div>

              <div style={{ height: '410px' }} className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
                <img className="img-fluid w-100" src={homeImage2} alt="" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: '700px' }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">DII MUSIC</h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Best Seller</h3>
                    <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
              <button className="btn btn-dark" style={{ width: '45px', height: '45px' }}onClick={() => goToSlide(currentSlide - 1)}><span className="carousel-control-prev-icon mb-n2"></span></button>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <button className="btn btn-dark" style={{ width: '45px', height: '45px' }} onClick={() => goToSlide(currentSlide + 1)}><span className="carousel-control-next-icon mb-n2"></span></button>
            </a>
          </div>
        </div>
     </div>
  
    </>
  );
}

export default Navbar;
