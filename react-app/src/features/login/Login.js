import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Login({ className, setUser ,url }) {
  const [username, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const navigate = useNavigate(); // นำเข้า useNavigate ที่นี่

  async function handleSubmit(event) {
    event.preventDefault();
    axios.get(url)
      .then(response => {
        const filteredUsers = response.data.filter(user => user.name === username && user.password === password);
   
        if (filteredUsers.length !== 0) {
          setUser(filteredUsers[0])
          console.log("seccess")
          console.log(filteredUsers[0])
          if (username === "addmin") {
            navigate('/Admin');
          } else {
            setUser(filteredUsers[0]);
            navigate('/');
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'account not found !',
            text: 'Oops...Something went wrong!',
            footer: 'Wrong user or password'
          });
        }

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  };

  return (
    <div className={className}>
  
  <div className="form-container">
    <div className="container">
    <div className="d-block">
    <a href="" className="text-decoration-none">
      <h1 className="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">D</span>DII MUSIC</h1>
    </a>
  </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => { setUserName(event.target.value) }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => { setUserPassword(event.target.value) }}
            required
          />
        </div>
        <div className="login">
          <button type="submit" ><Link to={username === "addmin" ? "/Admin" : "/"}>Login</Link></button>
        </div>
        <div className="create">
          <a><Link to="/create-account">Create Account</Link></a>
        </div>
      </form>
    </div>
  </div>
</div>


  );
}

export default styled(Login)`

.d-block{
  text-align: center;
  margin-bottom: 20px;
}
  
.container {
  width: 450px;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    margin: 0 auto; 
    border-radius: 25px;
    text-align: center; 
    margin-top: 150px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
    padding: 20px; 
    font-family: "Poppins", sans-serif;
    font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}



  .form-group {
    display: flex;
    flex-flow: column; 
    align-items: flex-start; 
    justify-content: flex-end; 
    margin-bottom: 10px;
  }

  .form-group input {
  width: 280px; 
  height: 40px; 
  border: 1px solid ;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 2); 
}

input {
  background-color: rgba(255, 255, 255, 1.5);
  opacity: 0.7; 
}

  .login{
    text-align: center;
    font-family: "Poppins", sans-serif;
  }

  .login a {
    color: black; 
  }

  .login button {
    background-color: #D19C97; 
    color: black; 
    border-radius: 20px;
    width: 100px;
    height: 40px;
    margin-top: 20px;
    border: none;
  }

  .login button:hover {
    background-color: #8a503d; 
  }

  .create{
    text-align: center;
    margin-top: 10px;
  }

  .create a {
    color: black;
    
  }
`;
