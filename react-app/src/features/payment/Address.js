import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Topbar from "../home/Topbar";

function Address({
  className,
  user,
  setUser,
  url,
  urlAddmin,
  addmin,
  products,
}) {

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzip] = useState("");
  const [add, setadd] = useState(null);
  const navigate = useNavigate();
  let total = 0;

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0]; // สำหรับไฟล์เดียว
      if (selectedFile) {
        // ใช้ URL.createObjectURL() เพื่อสร้าง URL ที่ชี้ไปยังไฟล์รูปภาพ
        const path = URL.createObjectURL(selectedFile);
        // ตอนนี้คุณมี path (URL) ที่ชี้ไปยังไฟล์รูปภาพใน path
        setadd(path);
      }
    }
    

  async function addAddress(event) {
    event.preventDefault();
    const newAddress = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobile: mobile,
      address: address,
      city: city,
      state: state,
      zip: zip,
      img: add,
    };

    if (!firstname || !lastname || !mobile || !city || !add) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please fill in all fields",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    if (!email.includes("@")) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid email format",
        text: 'Email must contain "@"',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      const updatedCartUser = user.cart.map((item) => {
        if (item.productStatus === "TO PAY") {
          return { ...item, productStatus: "TO SHIP" };
        }
        return item;
      });

      const itemToPushForAddmin = user.cart.find(
        (item) => item.productStatus === "TO PAY"
      );

      if (!Array.isArray(addmin.cart)) {
        addmin.cart = []; // เริ่มต้นเป็นอาร์เรย์ว่าง
      }

      if (itemToPushForAddmin) {
        const updatedItemToPushForAddmin = {
          userId: user._id,
          ...itemToPushForAddmin,
          address: newAddress,
        };

        const { _id, cart, ...itemWithOutIdA } = addmin;
        await axios.put(urlAddmin, {
          ...itemWithOutIdA,
          cart: [...addmin.cart, updatedItemToPushForAddmin],
        });
      }

      const { _id, cart, ...itemWithOutId } = user;

      setUser({ ...user, cart: updatedCartUser });
      await axios.put(`${url}/${user._id}`, {
        ...itemWithOutId,
        cart: updatedCartUser,
      });

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500

      }).then(() => {
        navigate('/');
      });
    } catch (error) {
      console.error("Error checkOut cart:", error);
    }
  }

  function renderOrderItems(cart) {
    return cart.order.map((order) => {
      const product = products.find(
        (product) => product.id === order.productId
      );
      return (
        <div key={order.productId}>
          <div className="d-flex justify-content-between">
            <p>{product.name}</p>
            <p>{order.quantity}</p>
            <p>${product.price * order.quantity}</p>
          </div>
        </div>
      );
    });
  }

  function renderCartItems() {
    return user.cart.map((orders) => {
      if (orders.productStatus === "TO PAY") {
        total = orders.totalPrice;
        return renderOrderItems(orders);
      }
      return null;
    });
  }

  return (
    <>
      <Topbar />
      <div className={className}>
        <form onSubmit={addAddress}>
          <div className="container-fluid pt-5">
            <div className="row px-xl-5">
              <div className="col-lg-8">
                <div className="mb-4">
                  <h4 className="font-weight-semi-bold mb-4">
                    Shipping Address
                  </h4>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>First Name</label>
                      <input
                        className="form-control"
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={firstname}
                        onChange={(event) => {
                          setfirstname(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={lastname}
                        onChange={(event) => {
                          setlastname(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>E-mail</label>
                      <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => {
                          setemail(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Mobile No</label>
                      <input
                        className="form-control"
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={mobile}
                        onChange={(event) => {
                          setmobile(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Address</label>
                      <input
                        className="form-control"
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={(event) => {
                          setaddress(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>City</label>
                      <input
                        className="form-control"
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={(event) => {
                          setcity(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>State</label>
                      <input
                        className="form-control"
                        type="text"
                        id="state"
                        name="state"
                        value={state}
                        onChange={(event) => {
                          setstate(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>ZIP Code</label>
                      <input
                        className="form-control"
                        type="text"
                        id="zip"
                        name="zip"
                        value={zip}
                        onChange={(event) => {
                          setzip(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Add image</label>
                      <input
                        className="form-control"
                        type="file"
                        id="add"
                        name="add"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="newaccount"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="newaccount"
                        >
                          Create an account
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-secondary mb-5">
                  <div className="-++">
                    <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="font-weight-medium mb-3">Products</h5>
                    
                    {user.cart.length > 0 ? renderCartItems() : null}

                    <div className="card-footer border-secondary bg-transparent">
                      <div className="d-flex justify-content-between mt-2">
                        <h5 className="font-weight-bold">Total</h5>
                        <h5 className="font-weight-bold">${total}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                      <h4 className="font-weight-semi-bold m-0">Payment</h4>
                      <img
                        src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC"
                        alt=""
                        width="300"
                      />
                    </div>
                  </div>
                  <div className="card-footer border-secondary bg-transparent">
                    <button
                      type="submit"
                      className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default styled(Address)`
  .navbar .container,
  .navbar .container-fluid,
  .navbar .container-sm,
  .navbar .container-md,
  .navbar .container-lg,
  .navbar .container-xl {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .pt-5,
  .py-5 {
    padding-top: 3rem !important;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .col-lg-8 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }

  .mb-4 {
    margin-bottom: 1.5rem !important;
  }

  .font-weight-semi-bold {
    font-weight: 600;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #edf1ff;
    border-radius: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .was-validated .custom-control-input:valid ~ .custom-control-label,
  .custom-control-input.is-valid ~ .custom-control-label {
    color: #28a745;
  }

  .was-validated .custom-control-input:valid ~ .custom-control-label::before,
  .custom-control-input.is-valid ~ .custom-control-label::before {
    border-color: #28a745;
  }

  .was-validated
    .custom-control-input:valid:checked
    ~ .custom-control-label::before,
  .custom-control-input.is-valid:checked ~ .custom-control-label::before {
    border-color: #34ce57;
    background-color: #34ce57;
  }

  .was-validated
    .custom-control-input:valid:focus
    ~ .custom-control-label::before,
  .custom-control-input.is-valid:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  }

  .was-validated
    .custom-control-input:valid:focus:not(:checked)
    ~ .custom-control-label::before,
  .custom-control-input.is-valid:focus:not(:checked)
    ~ .custom-control-label::before {
    border-color: #28a745;
  }

  .was-validated .custom-control-input:invalid ~ .custom-control-label,
  .custom-control-input.is-invalid ~ .custom-control-label {
    color: #dc3545;
  }

  .was-validated .custom-control-input:invalid ~ .custom-control-label::before,
  .custom-control-input.is-invalid ~ .custom-control-label::before {
    border-color: #dc3545;
  }

  .was-validated
    .custom-control-input:invalid:checked
    ~ .custom-control-label::before,
  .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
    border-color: #e4606d;
    background-color: #e4606d;
  }

  .was-validated
    .custom-control-input:invalid:focus
    ~ .custom-control-label::before,
  .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  }

  .was-validated
    .custom-control-input:invalid:focus:not(:checked)
    ~ .custom-control-label::before,
  .custom-control-input.is-invalid:focus:not(:checked)
    ~ .custom-control-label::before {
    border-color: #dc3545;
  }

  .custom-control-input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1rem;
    height: 1.25rem;
    opacity: 0;
  }

  .custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    border-color: #d19c97;
    background-color: #d19c97;
  }

  .custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: none;
  }

  .custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
    border-color: #f8f0ef;
  }

  .custom-control-input:not(:disabled):active ~ .custom-control-label::before {
    color: #fff;
    background-color: white;
    border-color: white;
  }

  .custom-control-input[disabled] ~ .custom-control-label,
  .custom-control-input:disabled ~ .custom-control-label {
    color: #6c757d;
  }

  .custom-control-input[disabled] ~ .custom-control-label::before,
  .custom-control-input:disabled ~ .custom-control-label::before {
    background-color: #e9ecef;
  }
  ------------------------------------------------------------
    .custom-checkbox
    .custom-control-input:checked
    ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
  }

  .custom-checkbox
    .custom-control-input:indeterminate
    ~ .custom-control-label::before {
    border-color: #d19c97;
    background-color: #d19c97;
  }

  .custom-checkbox
    .custom-control-input:indeterminate
    ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
  }

  .custom-checkbox
    .custom-control-input:disabled:checked
    ~ .custom-control-label::before {
    background-color: rgba(209, 156, 151, 0.5);
  }

  .custom-checkbox
    .custom-control-input:disabled:indeterminate
    ~ .custom-control-label::before {
    background-color: rgba(209, 156, 151, 0.5);
  }

  .custom-radio .custom-control-label::before {
    border-radius: 50%;
  }

  .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }

  .custom-radio
    .custom-control-input:disabled:checked
    ~ .custom-control-label::before {
    background-color: rgba(209, 156, 151, 0.5);
  }

  .custom-control-input:checked ~ .custom-control-label::after {
    background-color: #fff;
    transform: translateX(0.75rem);
  }

  .custom-control-input:disabled:checked ~ .custom-control-label::before {
    background-color: rgba(209, 156, 151, 0.5);
  }

  @media (min-width: 576px) {
    .custom-control-label {
      margin-bottom: 0;
    }
  }

  .custom-control-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
  }

  .custom-control-label::before {
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    content: "";
    background-color: #fff;
    border: #adb5bd solid 1px;
  }

  .custom-control-label::after {
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background: no-repeat 50% / 50% 50%;
  }

  .custom-control-label::before {
    left: -2.25rem;
    width: 1.75rem;
    pointer-events: all;
    border-radius: 0.5rem;
  }

  .custom-control-label::after {
    top: calc(0.25rem + 2px);
    left: calc(-2.25rem + 2px);
    width: calc(1rem - 4px);
    height: calc(1rem - 4px);
    background-color: #adb5bd;
    border-radius: 0.5rem;
    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .custom-control-label::after {
      transition: none;
    }
  }

  .custom-control-label::before {
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .custom-control-label::before {
      transition: none;
    }
  }

  .col-lg-4 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col-lg-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
  }

  .font-weight-medium {
    font-weight: 500;
  }

  .font-weight-bold {
    font-weight: 700 !important;
  }

  .font-weight-bolder {
    font-weight: bolder !important;
  }

  .font-weight-semi-bold m-0 {
    width: 300px;
  }
`
