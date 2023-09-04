import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


function Create({className,url}) {

    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setUserPassword] = useState("");
    const [confirm,setConfirm] = useState("");
    const navigate = useNavigate();
    

    async function addUser(event) {
      event.preventDefault();

      if (!username || !email || !password || !confirm) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Please fill in all fields',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }

      if (!email.includes('@')) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Invalid email format',
          text: 'Email must contain "@"',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }
  
      if (password !== confirm) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Passwords do not match',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }
  
      const newUser = { name: username, email: email, profile: '', password: password, cart: [] };
      try {
        const response = await axios.post(url, newUser);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate('/login');
        });
        console.log("User registered successfully", response.data);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  
    return (
      <div className={className}>
        
        <div className="form-container">
          <div className="container">
          <div className="d-block">
          <a href="" className="text-decoration-none">
            <h1 className="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">D</span>DII MUSIC</h1>
          </a>
        </div>
            <h2>Create Account</h2>
            <form onSubmit={addUser}>
              <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input type="text" id="name" name="name" value={username} onChange={(event) => { setUserName(event.target.value) }}  />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(event) => { setUserPassword(event.target.value) }} />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" value={confirm} onChange={(event) => { setConfirm(event.target.value) }}  />
              </div>
              <div className="create">
                <button type="submit">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  

export default styled(Create)`

  .d-block {
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
    margin-top: 70px;
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



.create button {
  background-color: #D19C97; 
  color: black; 
  border: none;
  border-radius: 20px;
  width: 100%; 
  height: 40px;
  margin-top: 20px;
}

.create {
  text-align: center; 
  margin-top: 10px;
}

.create a {
  color: black; 
}
`;
