import React from "react";
import leftMap from "../assets/world.jpg";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${leftMap})` }
      }


      ></div>
      <div className="rightSide">
        <h1> Login</h1>

        <form id="login-form" method="POST">
          <label htmlFor="userEmail">Email</label>
          <input name="userEmail" 
          placeholder="xyz@email.com" 
          type="email" 
          required/>
          
          <label htmlFor="password">Password</label>
          <input name="password" 
          placeholder="password" 
          type="password" 
          required/>

          <button type="submit"> login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;