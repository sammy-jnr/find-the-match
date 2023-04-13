import React, { useContext } from "react";
import "./Play.css";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../Assets/icons/menuIcon.svg";
import { GeneralContext } from "../context/MainContext";
import { auth } from "../Firebase/FirebaseHosting";

function Result() {
  const navigate = useNavigate();

  const {
    setmenuOpen,
    playersScores,
    currectGameInfo,
    numberOfAttempts,
    timeSpent,
    singlePlayerScore,
    playerNames,
  } = useContext(GeneralContext);

  let playersMode;
  if (currectGameInfo.numberOfPlayers <= 1) {
    playersMode = "singleplayer";
  }

  let player1Score = playersScores[0].score;
  let player2Score = playersScores[1].score;
  let player3Score = playersScores[2].score;
  let player4Score = playersScores[3].score;

  let seconds = Math.floor(timeSpent % 60);
  let minutes = Math.floor((timeSpent / 60) % 60);
  let displayTime;
  if (seconds < 10) {
    displayTime = `${minutes}:0${seconds}`;
  } else {
    displayTime = `${minutes}:${seconds}`;
  }

  return (
    <div id="resultContainer">
      <section id="signupMenu">
        <img
          src={menuIcon}
          alt=""
          id="signupMenuIcon"
          onClick={() => setmenuOpen(true)}
        />
      </section>
      <section id="gameOverText">Game Over</section>
      <section id="scoreAreaContainer">
        {playersMode === "singleplayer" && (
          <section id="scoreArea">
            <div id="noOfAttemptsText">Attempts: {numberOfAttempts}</div>
            <div id="timeText">Time spent: {displayTime}</div>
            <div id="scoreText">Score: {singlePlayerScore}</div>
          </section>
        )}
        {playersMode !== "singleplayer" && (
          <section id="scoreArea2">
            <div className="scoreArea2Items">
              <div className="scoreArea2ItemsName">
                {playerNames["player1"] ?? "Player1"}
              </div>
              <div className="scoreArea2ItemsScore">Score: {player1Score}</div>
            </div>
            {currectGameInfo.numberOfPlayers > 1 && (
              <div className="scoreArea2Items">
                <div className="scoreArea2ItemsName">
                  {playerNames["player2"] ?? "Player2"}
                </div>
                <div className="scoreArea2ItemsScore">
                  Score: {player2Score}
                </div>
              </div>
            )}
            {currectGameInfo.numberOfPlayers > 2 && (
              <div className="scoreArea2Items">
                <div className="scoreArea2ItemsName">
                  {playerNames["player3"] ?? "Player3"}
                </div>
                <div className="scoreArea2ItemsScore">
                  Score: {player3Score}
                </div>
              </div>
            )}
            {currectGameInfo.numberOfPlayers > 3 && (
              <div className="scoreArea2Items">
                <div className="scoreArea2ItemsName">
                  {playerNames["player4"] ?? "Player4"}
                </div>
                <div className="scoreArea2ItemsScore">
                  Score: {player4Score}
                </div>
              </div>
            )}
          </section>
        )}
      </section>
      <button
        id="newGameBtn"
        onClick={() => {
          navigate("/startgame");
        }}
      >
        New Game
      </button>
      {!auth.currentUser && (
        <div>
          <section id="signInText">
            <div>
              <Link to="/signin" className="links3">
                {" "}
                Sign In{" "}
              </Link>{" "}
              to save your score
            </div>
          </section>
          <section id="leaderBoardText">
            Check the{" "}
            <Link to="" className="links3">
              Leaderboards
            </Link>{" "}
          </section>
        </div>
      )}
    </div>
  );
}

export default Result;
