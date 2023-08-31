import React from "react";

function PageHeader() {
  return (<div class="container-fluid bg-secondary mb-5">
  <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
      <h1 class="font-weight-semi-bold text-uppercase mb-3">Product Detail</h1>
      <div class="d-inline-flex">
          <p class="m-0"><a href="">Home</a></p>
          <p class="m-0 px-2">-</p>
          <p class="m-0">Product Detail</p>
      </div>
  </div>
</div>
  );
}

export default PageHeader;