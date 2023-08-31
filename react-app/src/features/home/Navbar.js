import React from "react";

function Navbar() {
    const p9 = require(`./P9.jpeg`);
  return (
    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
            {/* ... */}
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            {/* ... */}
          </nav>
          <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: '410px' }}>
                <img className="img-fluid w-100" src={p9} alt="" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: '700px' }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">WELCOME TO</h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">DII MUSIC</h3>
                    <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                  </div>
                </div>
              </div>
              {/* ... */}
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
              <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                <span className="carousel-control-prev-icon mb-n2"></span>
              </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
              <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                <span className="carousel-control-next-icon mb-n2"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
