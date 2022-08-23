import React, {useContext} from 'react'
import "./Play.css"
import { Link } from "react-router-dom"
import menuIcon from "../Assets/icons/menuIcon.svg"
import { GeneralContext } from "../context/MainContext"



function Result() {
  const { setmenuOpen } = useContext(GeneralContext)

  return (
    <div id='resultContainer'>
        <section id='signupMenu'><img src={menuIcon} alt="" id='signupMenuIcon' onClick={()=>setmenuOpen(true)} /></section>
        <section id="gameOverText">
            Game Over
        </section>
        <section id='scoreArea' >
            <div id='noOfAttemptsText'>Attempts: 20</div>
            <div id='timeText'>Time spent: 1:02</div>
            <div id='scoreText'>Score: 200</div>
        </section>
        <button id="newGameBtn">New Game</button>
        <section id='signInText'>
            <div><Link to="/signin">  Sign In </Link>  to save your score</div>
        </section>
        <section id='leaderBoardText'>Check the <Link to='' >Leaderboards</Link> </section>
    </div>
  )
}

export default Result