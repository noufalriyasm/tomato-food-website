import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currentState,setCurrentState]=useState("Sign Up")
  return (

    <div className="login-popup">
       <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false)}></img>
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login" ? <></>:<input type='text' placeholder='Your Name' required></input>}
            <input type='email' placeholder='Email' required></input>
            <input type='password' placeholder='Password' required></input>
        </div>
        <button>{currentState==="Sign Up"? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required></input>
            <p>By continuing i agree the terms and conditions.</p>
        </div>
        {currentState==="Login"? 
        <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p> 
        : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>}
        
        
       </form>
    </div>
  )
}

export default LoginPopUp