import React, {useContext} from 'react'
import "./Play.css"
import { Link } from "react-router-dom"
import menuIcon from "../Assets/icons/menuIcon.svg"
import { GeneralContext } from "../context/MainContext"
import { useState, useEffect } from 'react'



function Result() {
  const { setmenuOpen, playersScores, currectGameInfo, numberOfAttempts, timeSpent } = useContext(GeneralContext)

  let playersMode;
  if(currectGameInfo.numberOfPlayers <= 1){
    playersMode  = "singleplayer";
  }
  
console.log(playersScores)
  let player1Score = playersScores[0].score 
  let player2Score = playersScores[1].score 
  let player3Score = playersScores[2].score 
  let player4Score = playersScores[3].score 

  let [whoWon, setWhoWon] = useState()
  useEffect(()=>{

  },[])


  let seconds = Math.floor( (timeSpent) % 60 );
  let minutes = Math.floor( (timeSpent/60) % 60 )  
  console.log(timeSpent)
  let displayTime
  if(seconds < 10){
      displayTime = `${minutes}:0${seconds}`
  }else{
      displayTime = `${minutes}:${seconds}`
  }      

  return (
    <div id='resultContainer'>
        <section id='signupMenu'><img src={menuIcon} alt="" id='signupMenuIcon' onClick={()=>setmenuOpen(true)} /></section>
        <section id="gameOverText">
            Game Over
        </section>
        {playersMode === "singleplayer" &&<section id='scoreArea' >
            <div id='noOfAttemptsText'>Attempts: {numberOfAttempts}</div>
            <div id='timeText'>Time spent: {displayTime}</div>
            <div id='scoreText'>Score: {player1Score *10}</div>
        </section>}
        {playersMode !== "singleplayer" && 
          <section id='scoreArea2'>
            <div className="scoreArea2Items">
              <div className="scoreArea2ItemsName">Player1</div>
              <div className="scoreArea2ItemsScore">Score: {player1Score}</div>
            </div>
            {currectGameInfo.numberOfPlayers > 2 &&
              <div className="scoreArea2Items">
                <div className="scoreArea2ItemsName">Player2</div>
                <div className="scoreArea2ItemsScore">Score: {player2Score}</div>
              </div>}
            {currectGameInfo.numberOfPlayers > 2 &&
              <div className="scoreArea2Items">
                <div className="scoreArea2ItemsName">Player3</div>
                <div className="scoreArea2ItemsScore">Score: {player3Score}</div>
              </div>
            }
            {currectGameInfo.numberOfPlayers > 3 &&
              <div className="scoreArea2Items">
                <div className="scoreArea2ItemsName">Player4</div>
                <div className="scoreArea2ItemsScore">Score: {player4Score}</div>
              </div>
            }
          </section>
        }
        <button id="newGameBtn">New Game</button>
        <section id='signInText'>
            <div><Link to="/signin">  Sign In </Link>  to save your score</div>
        </section>
        <section id='leaderBoardText'>Check the <Link to='' >Leaderboards</Link> </section>
    </div>
  )
}

export default Result