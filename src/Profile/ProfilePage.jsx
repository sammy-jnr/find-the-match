import React, { useState, useEffect, useContext } from "react";
import menuIcon from "../Assets/icons/menuIconBlack.svg";
import closeIcon from "../Assets/icons/closeIcon.svg";
import downArrow from "../Assets/icons/downArrow.svg";
import upArrow from "../Assets/icons/upArrow.svg";
import pencilIcon from "../Assets/icons/pencilIcon.svg";
import "./Profile.css";
import { useNavigate, useLocation } from "react-router-dom";
import { GeneralContext } from "../context/MainContext";
import { AuthContext } from "../context/AuthenticationContext";

function ProfilePage() {
  const navigate = useNavigate();

  const { setmenuOpen } = useContext(GeneralContext);
  const {
    username,
    AverageTime4by4,
    AverageScore4by4,
    HighestScore4by4,
    AverageTime6by6,
    AverageScore6by6,
    HighestScore6by6,
    TotalGamesPlayed,
    TotalGamesWon,
    TotalGamesLost,
    FastestTime4by4,
    TotalGamesPlayed4by4,
    GamesArray4by4,
    GamesArray6by6,
    FastestTime6by6,
    TotalGamesPlayed6by6,
    updatingUserProfile,
    receiveUserAvatar,
  } = useContext(AuthContext);

  const location = useLocation();
  useEffect(() => {
    setmenuOpen(false);
  }, [location]);

  let [selectedAvatar, setselectedAvatar] = useState();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `../Assets/Avatars/${receiveUserAvatar}.jpg`
        );
        setselectedAvatar(response.default);
      } catch (err) {
        console.log(err);
      }
    };

    fetchImage();
  }, [receiveUserAvatar]);

  let [fourByFour, setfourByFour] = useState(true);

  let [usingFirstFive4By4, setusingFirstFive4By4] = useState(true);
  let [usingFirstFive6By6, setusingFirstFive6By6] = useState(true);

  let firstFiveArray4By4 = [];
  GamesArray4by4.forEach((item) => {
    if (firstFiveArray4By4.length < 5) {
      firstFiveArray4By4.push(item);
    }
  });
  let firstFiveArray6By6 = [];
  GamesArray6by6.forEach((item) => {
    if (firstFiveArray6By6.length < 6) {
      firstFiveArray6By6.push(item);
    }
  });

  let [usedArray4By4, setusedArray4By4] = useState(firstFiveArray4By4);
  let [usedArray6By6, setusedArray6By6] = useState(firstFiveArray6By6);

  function setfinal4By4() {
    if (usingFirstFive4By4) {
      setusedArray4By4(GamesArray4by4);
    } else {
      setusedArray4By4(firstFiveArray4By4);
    }
  }

  function setfinal6By6() {
    if (usingFirstFive6By6) {
      setusedArray6By6(GamesArray6by6);
    } else {
      setusedArray6By6(firstFiveArray6By6);
    }
  }
  useEffect(() => {
    setusedArray4By4(firstFiveArray4By4);
    setusedArray6By6(firstFiveArray6By6);
  }, [GamesArray4by4, GamesArray6by6]);

  function convertTimeFormat(time) {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor((time / 60) % 60);
    let displayTime;
    if (seconds < 10) {
      displayTime = `${minutes}:0${seconds}`;
    } else {
      displayTime = `${minutes}:${seconds}`;
    }
    return displayTime;
  }
  function changeToAppropriateDate(date) {
    var newString = "";
    for (var i = date.length - 1; i >= 0; i--) {
      newString += date[i];
    }
    let a = newString.substring(13);
    let b = "";
    for (let i = a.length - 1; i >= 0; i--) {
      b += a[i];
    }
    return b;
  }

  function Show4by4() {
    return (
      <div className="selectedSection">
        <section className="last5Games">
          <div className="last5GamesText">
            Games Hisory
            <div
              id="displayAmountToggle"
              className="hoverable"
              onClick={() => {
                setusingFirstFive4By4((prev) => !prev);
                setfinal4By4();
              }}
            >
              <div>{usingFirstFive4By4 ? "show more" : "show less"}</div>
              <img
                src={usingFirstFive4By4 ? downArrow : upArrow}
                alt=""
                id="moreLessImage"
              />
            </div>
          </div>
          <div id="displayCategories">
            <div className="gameHistoryCategories">Date</div>
            <div className="gameHistoryCategories">Score</div>
            <div className="gameHistoryCategories">Time Spent</div>
          </div>
          {usedArray4By4.map((item, index) => {
            return (
              <div className="last5GamesItems" key={index}>
                <div className="last5GamesItemsInner">{item.date}</div>
                <div className="last5GamesItemsInner">{item.score}</div>
                <div className="last5GamesItemsInner">
                  {convertTimeFormat(item.timeSpent)}
                </div>
              </div>
            );
          })}

          <section className="last5GamesShowMore"></section>
        </section>
        <section className="selectedSectionInfo">
          <div className="selectedSectionInfoItems">
            <div>Total Games</div> <div>{TotalGamesPlayed4by4} games</div>
          </div>
          <div className="selectedSectionInfoItems">
            <div>Average time</div> <div>{AverageTime4by4}</div>
          </div>
          <div className="selectedSectionInfoItems">
            <div>Average Score</div> <div>{AverageScore4by4}</div>
          </div>
          <div className="selectedSectionInfoItems">
            <div>Highest Score</div> <div>{HighestScore4by4}</div>
          </div>
          <div className="selectedSectionInfoItems">
            <div>Fastest Time</div> <div>{FastestTime4by4}</div>
          </div>
        </section>
      </div>
    );
  }
  function Show6by6() {
    return (
      <div className="selectedSection">
        <section className="last5Games">
          <div className="last5GamesText">
            Games Hisory
            <div
              id="displayAmountToggle"
              onClick={() => {
                setusingFirstFive6By6((prev) => !prev);
                setfinal6By6();
              }}
            >
              <div>{usingFirstFive6By6 ? "show more" : "show less"}</div>
              <img
                src={usingFirstFive6By6 ? downArrow : upArrow}
                alt=""
                id="moreLessImage"
              />
            </div>
          </div>
          <div id="displayCategories">
            <div className="gameHistoryCategories">Date</div>
            <div className="gameHistoryCategories">Score</div>
            <div className="gameHistoryCategories">Time Spent</div>
          </div>
          {usedArray6By6.map((item, index) => {
            return (
              <div className="last5GamesItems" key={index}>
                <div className="last5GamesItemsInner">{item.date}</div>
                <div className="last5GamesItemsInner">{item.score}</div>
                <div className="last5GamesItemsInner">
                  {convertTimeFormat(item.timeSpent)}
                </div>
              </div>
            );
          })}

          <section className="last5GamesShowMore"></section>
        </section>
        <section className="selectedSectionInfo">
          <div className="selectedSectionInfoItems">
            <div>Total Games</div> <div>{TotalGamesPlayed6by6} games</div>
          </div>
          <div className="selectedSectionInfoItems">
            <div>Average time</div> <div>{AverageTime6by6}</div>
          </div>
          <div className="selectedSectionInfoItems">
            <div>Average Score</div> <div>{AverageScore6by6}</div>
          </div>
          <div className="selectedSectionInfoItems">
            <div>Highest Score</div> <div>{HighestScore6by6}</div>
          </div>
          <div className="selectedSectionInfoItems">
            <div>Fastest Time</div> <div>{FastestTime6by6}</div>
          </div>
        </section>
      </div>
    );
  }

  let [editName, seteditName] = useState(false);
  let [holdTempName, setholdTempName] = useState();

  const SelectedA = {
    backgroundColor: "#041e29",
    color: "white",
    borderRadius: "5px 5px 0 0",
  };
  const NotSelectedA = {
    backgroundColor: "transparent",
    color: "black",
  };

  return (
    <div id="profileContainer">
      <section id="HeaderSecction">
        <div id="HeaderSecctionInner">
          <div
            id="profileAvatar"
            onClick={() => {
              navigate("avatars");
            }}
          >
            {" "}
            <img src={selectedAvatar} alt="" id="avatarImage" className="hoverable" />{" "}
          </div>
          <div id="profileName">{username}</div>
          <img
            src={pencilIcon}
            alt=""
            id="pencilIcon"
            className="hoverable"
            onClick={() => {
              seteditName(true);
            }}
          />
        </div>
        <img
          src={menuIcon}
          alt=""
          id="menuIcon"
          onClick={() => setmenuOpen(true)}
        />
      </section>
      <section id="profileInfoContainer">
        <div className="profileInfoDetails">
          Games played:{" "}
          <div className="profileInfoDetailsInner">{TotalGamesPlayed}</div>
        </div>
        <div className="profileInfoDetails">
          Games won:{" "}
          <div className="profileInfoDetailsInner">{TotalGamesWon}</div>
        </div>
        <div className="profileInfoDetails">
          Games lost:
          <div className="profileInfoDetailsInner">{TotalGamesLost}</div>
        </div>
      </section>
      <section className="mainInfoSection">
        <div id="profileSelectMode">
          <div
            style={fourByFour ? SelectedA : NotSelectedA}
            id="profileSelection4by4"
            className="hoverable"
            onClick={() => setfourByFour(true)}
          >
            4*4
          </div>
          <div
            style={fourByFour ? NotSelectedA : SelectedA}
            id="profileSelection6by6"
            className="hoverable"
            onClick={() => setfourByFour(false)}
          >
            6*6
          </div>
        </div>
        <div
          id="displaySelected"
          style={{
            borderRadius: fourByFour ? "0 5px 5px 5px" : "5px 0 5px 5px",
          }}
        >
          {fourByFour ? <Show4by4 /> : <Show6by6 />}
        </div>
      </section>
      {editName && (
        <div id="changeNameContainer">
          <div id="changeNameContainerTextDiv">
            <div>Change name</div>
            <img
              src={closeIcon}
              alt=""
              id="closeChangeName"
              onClick={() => {
                seteditName(false);
              }}
            />
          </div>
          <div id="changeNameInputSection">
            <input
              type="text"
              id="changeNameInput"
              placeholder="Enter name (minimum 2 letters)"
              onChange={(e) => setholdTempName(e.target.value)}
            />
            <button
              id="saveNameButton"
              onClick={() => {
                if (holdTempName.length < 2) {
                  alert("name is too short");
                  return;
                }
                updatingUserProfile(holdTempName);
                seteditName(false);
              }}
            >
              SAVE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
