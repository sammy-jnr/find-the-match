import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import "./Sign.css"
import { AuthContext } from "../context/AuthenticationContext"
import {GeneralContext} from "../context/MainContext"
import { auth } from '../Firebase/FirebaseHosting'
import menuIcon from "../Assets/icons/menuIcon.svg"


function SignUp() {

            
    const user = auth.currentUser

    const{ CreateNewUser, updatingUserProfile, addUserToDatabase,setDisplayName } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const{ setmenuOpen } = useContext(GeneralContext)
    useEffect(() => {
      setmenuOpen(false)
    }, [location]);

    let[name, setName] = useState("")
    let[email, setEmail] = useState("")
    let[password, setPassword] = useState("")
    let[confirmPassword, setConfirmPassword] = useState("")

    const submitInfo = async(e) =>{
        e.preventDefault();
        if(password !== confirmPassword){console.log("passwords do not match");return;}
        try {
            await CreateNewUser(email, password).then(()=>{
                navigate("/profilepage")
            })
                       
        } catch (error) {
            console.log(error)
        }
       

    } 
   
  return (
    <div id='signupContainer'>
        <section id='signupMenu'><img src={menuIcon} alt="" id='signupMenuIcon' onClick={()=>setmenuOpen(true)} /></section>
        <section id='signupText'>Sign Up</section>
        <form action="submit" id='signupForm' onSubmit={(e) => submitInfo(e)}>
            <label htmlFor="nameInput" className='formItems'>
                <div className="signupMiniText">Name</div>
                <input type="name" name='nameInput' id='nameInput' onChange={(e)=>setDisplayName(e.target.value)} />
            </label>
            <label htmlFor="emailInput" className='formItems'>
                <div className="signupMiniText">Email</div>
                <input type="email" name='emailInput' id='emailInput' onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label htmlFor="passwordInput" className='formItems'>
                <div className="signupMiniText">Password</div>
                <input type="password" name='passwordInput' id='passwordInput'onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <label htmlFor="ConfirmPasswordInput" className='formItems'>
                <div className="signupMiniText">Confirm Password</div>
                <input type="password" name="confirmPasswordInput" id='confirmPasswordInput' onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </label>
            <div id='submitDiv'><button id='signupSubmitButton'>Sign up</button></div>
        </form>
        <section id='signupExtras'>
            Already have an account? 
            <Link to="/signin" className="links2">Login</Link>
        </section>
    </div>
  )
}

export default SignUp