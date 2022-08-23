import React,{ useContext, useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import "./Sign.css"
import { AuthContext } from "../context/AuthenticationContext"
import {GeneralContext} from "../context/MainContext"
import { auth } from '../Firebase/FirebaseHosting'
import menuIcon from "../Assets/icons/menuIcon.svg"




function SignIn() {
    const user = auth.currentUser

    const{ signInExistingUser } = useContext(AuthContext);

    const location = useLocation();
    const{ setmenuOpen } = useContext(GeneralContext)
    useEffect(() => {
      setmenuOpen(false)
    }, [location]);

    const navigate = useNavigate();


    let[email, setEmail] = useState("")
    let[password, setPassword] = useState("")

    const signInUsers = async (e) => {
        e.preventDefault();
       
        try {
            await signInExistingUser(email, password);
            console.log("user.uid")
            navigate("/profilepage")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div id='signInContainer'>
        <section id='signupMenu'><img src={menuIcon} alt="" id='signupMenuIcon' onClick={()=>setmenuOpen(true)} /></section>
        <section id='signinText'>Sign In</section>
        <form action="submit" id='signinForm' onSubmit={(e) => signInUsers(e)}>
            <label htmlFor="emailInput" className='formItems'>
                <div className="signinMiniText">Email</div>
                <input type="email" name='emailInput' id='emailInputsignIn' onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label htmlFor="passwordInput" className='formItems'>
                <div className="signinMiniText">Password</div>
                <input type="password" name='passwordInput' id='passwordInputsignIn' onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <div id='submitDivSignin'><button id='signinSubmitButton'>Sign in</button></div>
        </form>
        
        <section id='signinExtras'>
            <div id='refForgotPasssword'> 
                <Link to="/resetpassword" style={{margin: 0}} className="links2">Forgot password?</Link>
            </div>
            Don't have an account? 
            <Link to="/signup" className="links2">Sign up</Link>
        </section>
        
    </div>
  )
}

export default SignIn