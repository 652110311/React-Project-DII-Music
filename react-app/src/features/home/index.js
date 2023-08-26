import React from "react";
function Header() {
  return (
    <>
    <head>
      <meta charSet="utf-8" />
      <title>DII MUSIC</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="Free HTML Templates" />
      <meta name="description" content="Free HTML Templates" />
      <link rel="stylesheet" type="text/css" href="style.css" />
      <link rel="icon" href="img/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="lib/owlcarousel/assets/owl.carousel.min.css"
      />
      <link rel="stylesheet" href="css/style.css" />
    </head>
    
    <div class="container-fluid">
      <div class="row bg-secondary py-2 px-xl-5">
          <div class="col-lg-6 d-none d-lg-block">
              <div class="d-inline-flex align-items-center">
                  <a class="text-dark" href="">FAQs</a>
                  <span class="text-muted px-2">|</span>
                  <a class="text-dark" href="">Help</a>
                  <span class="text-muted px-2">|</span>
                  <a class="text-dark" href="">Support</a>
              </div>
          </div>
          <div class="col-lg-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
                <a class="text-dark px-2" href="">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a class="text-dark px-2" href="">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="text-dark px-2" href="">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a class="text-dark px-2" href="">
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="text-dark pl-2" href="">
                    <i class="fab fa-youtube"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="row align-items-center py-3 px-xl-5">
      <div class="col-lg-3 d-none d-lg-block">
          <a href="" class="text-decoration-none">
              <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">D</span>DII MUSIC</h1>
          </a>
      </div>
      <div class="col-lg-6 col-6 text-left">
          <form action="">
              <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search for products"/>
                  <div class="input-group-append">
                      <span class="input-group-text bg-transparent text-primary">
                          <i class="fa fa-search"></i>
                      </span>
                  </div>
              </div>
          </form>
      </div>
      <div class="col-lg-3 col-6 text-right">
        <a href="" class="btn border">
            <i class="fas fa-heart text-primary"></i>
            <span class="badge">0</span>
        </a>
        <a href="" class="btn border">
            <i class="fas fa-shopping-cart text-primary"></i>
            <span class="badge">0</span>
        </a>
      </div>
  </div>
</div>
    </>
  );
}

export default Header;