import React, { useContext, useEffect } from "react";
import menuIcon from "../Assets/icons/menuIcon.svg";
import { GeneralContext } from "../context/MainContext";
import { AuthContext } from "../context/AuthenticationContext";
import { useLocation } from "react-router-dom";
import "./LeaderBoard.css";

function LeaderBoard() {
  const { setmenuOpen } = useContext(GeneralContext);
  const { LeaderBoardArray4By4, LeaderBoardArray6By6 } =
    useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    setmenuOpen(false);
  }, [location]);

  return (
    <div id="leaderboardContainer">
      <section id="leaderboardMenu">
        <img
          src={menuIcon}
          alt=""
          id="leaderboardMenuIcon"
          onClick={() => setmenuOpen(true)}
        />
      </section>
      <div className="leaderboardContainers">
        <div className="leaderboardContainersTitle">Top 10 Scores (4 * 4) </div>
        <div>
          {LeaderBoardArray4By4.map((item, index) => {
            return (
              <div className="top10Items" key={index}>
                <div className="top10ItemsImage">
                  <img
                    src={require(`../Assets/Avatars/${item.Avatar}.jpg`)}
                    alt=""
                    className="avatarsImg"
                  />
                </div>
                <div className="top10ItemsEmail">{item.Email}</div>
                <div className="top10ItemsScore">{item.Score}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="leaderboardContainers">
        <div className="leaderboardContainersTitle">Top 10 Scores (6 * 6) </div>
        <div>
          {LeaderBoardArray6By6.map((item, index) => {
            return (
              <div className="top10Items" key={index}>
                <div className="top10ItemsImage">
                  <img
                    src={require(`../Assets/Avatars/${item.Avatar}.jpg`)}
                    alt=""
                    className="avatarsImg"
                  />
                </div>
                <div className="top10ItemsEmail">{item.Email}</div>
                <div className="top10ItemsScore">{item.Score}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
