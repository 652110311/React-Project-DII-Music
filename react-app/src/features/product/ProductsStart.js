import React from "react";

function ProductsStart() {
  return (<div className="container-fluid py-5">
  <div className="text-center mb-4">
      <h2 className="section-title px-5"><span className="px-2">You May Also Like</span></h2>
  </div>
  <div className="row px-xl-5">
      <div className="col">
          <div className="owl-carousel related-carousel">
              <div className="card product-item border-0">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">Bass</h6>
                      <div className="d-flex justify-content-center">
                          <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                      </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                      <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                      <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                  </div>
              </div>
              <div className="card product-item border-0">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">Drum</h6>
                      <div className="d-flex justify-content-center">
                          <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                      </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                      <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                      <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                  </div>
              </div>
              <div className="card product-item border-0">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">Guitar</h6>
                      <div className="d-flex justify-content-center">
                          <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                      </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                      <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                      <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                  </div>
              </div>
              <div className="card product-item border-0">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">Piano</h6>
                      <div className="d-flex justify-content-center">
                          <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                      </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                      <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                      <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                  </div>
              </div>
              <div className="card product-item border-0">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">Violin</h6>
                      <div className="d-flex justify-content-center">
                          <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                      </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                      <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                      <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>

    );
}

export default ShopDetail;