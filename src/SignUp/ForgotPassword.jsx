import React, { useContext, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {GeneralContext} from "../context/MainContext"
import menuIcon from "../Assets/icons/menuIcon.svg"
import "./Sign.css"

function ForgotPassword() {

  const location = useLocation();
    const{ setmenuOpen } = useContext(GeneralContext)
    useEffect(() => {
      setmenuOpen(false)
    }, [location]);

  return (
    <div id='forgotPasswordContainer'>
        <section id='signupMenu'><img src={menuIcon} alt="" id='signupMenuIcon' onClick={()=>setmenuOpen(true)} /></section>
        <div id='signinText' >Reset Password</div>
        <label htmlFor="emailInput" id='forgotPasswordDiv'>
            <div className="signinMiniText">email</div>
            <input type="email" name='emailInput' id='emailInputForgotPassword'/>
        </label>
        <div id='submitDivForgotPassword'><button id='ForgotPasswordSubmitButton'>Submit</button></div>
    </div>
  )
}

export default ForgotPassword