import React from "react";

import "../styles/Signup.css";
import {Link}  from 'react-router-dom';

function Signup() {
  return (
    <div className="signUp">

        <h1> Sign Up</h1>
        
{/* sign up page consist of first, last name, email, and password */}
        <form id="signUp-form" method="POST">
        <label htmlFor="fName">First Name</label>
          <input name="fName" 
          placeholder="Hello" 
          type="text" 
          required/>

        <label htmlFor="lName">Last Name</label>
          <input name="lName" 
          placeholder="Kitty" 
          type="text" 
          required/>

          <label htmlFor="userEmail">Email</label>
          <input name="userEmail" 
          placeholder="xyz@email.com" 
          type="email" 
          required/>
          
          <label htmlFor="password">Creat Password</label>
          <input name="password" 
          placeholder="password" 
          type="password" 
          required/>
              <label htmlFor="password">verify Password</label>
          <input name="password" 
          placeholder="password" 
          type="password" 
          required/>

          <button type="submit"> Sign up</button>
        </form>
    
      {/*already have one login link*/}
        <div className='signUpBottom'>
            <p>Already have a account?</p>
        <Link to='../pages/Login'>Login</Link>
        </div>

      </div>

  );
}

export default Signup;