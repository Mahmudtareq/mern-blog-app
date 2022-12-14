import React from 'react';
import './Register.css';

const Register = () => {
    return (
         <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" >
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        //   onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
        //   onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        //   onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        {/* <Link className="link" to="/login">
          Login
        </Link> */}
                Login
      </button>
      {/* {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>} */}
    </div>
    );
};

export default Register;