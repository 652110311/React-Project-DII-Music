import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
         box-sizing: border-box;
         font-family: "Poppins", sans-serif;
         
       }
body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #6F6F6F;
    text-align: left;
    background-color: #fff;
  }
  
/* Responsive */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .box {
    width: 100%;
  }
}


body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}
.cancel{
    color:red;
}
h1 {
  margin-top: 5%;
  text-align: center;
  margin-bottom: 20px;
}

form {
  max-width: 100%;
  margin: 50px;
  border: 1px solid #ddd;
  padding: 30px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

input[type="file"] {
  margin-top: 5px;
}

button[type="button"] {
  background-color: #ccc;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
}

button[type="button"]:hover {
  background-color: #ddd;
}

button[type="submit"] {
  background-color: #35424a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #263238;
  /* Change background color on hover */
  color: #ff9800;
  /* Change text color on hover */
}

/* ... (Previous CSS) ... */

.file-input {
  display: none;
  /* Hide the actual file input */
}

.file-label {
  display: inline-block;
  cursor: pointer;
}

.file-box {
  width: 150px;
  height: 150px;
  background-color: #f4f4f4;
  border: 2px dashed #aaa;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}

.plus-icon {
  font-size: 40px;
  color: #aaa;
  z-index: 1;
}

.plus-icon:hover {
  color: #555;
}

/* ---------------------Add block--------------------- */
.add-box {
  background-color: #f4f4f4;
  border: 2px dashed #aaa;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  height: 100%;


}

.add-label {
  display: inline-block;
  cursor: pointer;
  padding-bottom: 0.25rem;
  position: relative;
  width: 20%;
  padding-right: 15px;
  padding-left: 15px;

}
  `;

export default GlobalStyle;
