import React from "react";
import "./All.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import closeIcon from "./Assets/icons/closeIcon.svg";
import homeIcon from "./Assets/icons/homeIcon.svg";
import leaderBoardIcon from "./Assets/icons/leaderBoardIcon.svg";
import playIcon from "./Assets/icons/playIcon.svg";
import profileIcon from "./Assets/icons/profileIcon.svg";
import settingsIcon from "./Assets/icons/settingsIcon.svg";
import signUpIcon from "./Assets/icons/signUpIcon.svg";
import { GeneralContext } from "./context/MainContext";
import { AuthContext } from "./context/AuthenticationContext";

function Navigation() {
  const { menuOpen, setmenuOpen } = useContext(GeneralContext);

  const { logOut, isLoggedIn, username, receiveUserAvatar } =
    useContext(AuthContext);

  let [selectedAvatar, setselectedAvatar] = useState();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `./Assets/Avatars/${receiveUserAvatar}.jpg`
        );
        setselectedAvatar(response.default);
      } catch (err) {
        console.log(err);
      }
    };

    fetchImage();
  }, [receiveUserAvatar]);

  return (
    <>
    <div className="navigationContainerInner" style={{ right: menuOpen ? "0" : "-100%" }}></div>
    <div id="navigationContainer" style={{ right: menuOpen ? "0" : "-100%" }}>
      {isLoggedIn && (
        <div id="navProfileDetails">
          <div id="navProfileDetailsInner">
            <div id="navProfileAvatar">
              <img src={selectedAvatar} alt="" id="profileAvatar2" />
            </div>
            <p id="navProfileName">{username}</p>
          </div>
          <img
            src={closeIcon}
            alt=""
            className="basicIcons hoverable"
            id="closeIcon"
            onClick={() => setmenuOpen(false)}
          />
        </div>
      )}
      {!isLoggedIn && (
        <img
          src={closeIcon}
          alt=""
          className="basicIcons hoverable"
          id="closeIcon2"
          onClick={() => setmenuOpen(false)}
        />
      )}
      <div
        id="navItemsContainer"
        style={{ paddingTop: isLoggedIn ? "40px" : "80px" }}
      >
        <Link to="/" className="links">
          <div className="navItems">
            {" "}
            <div className="navThumbnailDiv">
              <img
                src={homeIcon}
                alt=""
                style={{ position: "relative", left: "-3px" }}
                className="bigIcons"
              />{" "}
            </div>{" "}
            <p>Home</p>{" "}
          </div>
        </Link>
        <Link to="/settings" className="links">
          <div className="navItems">
            {" "}
            <div className="navThumbnailDiv">
              <img
                src={settingsIcon}
                alt=""
                style={{ width: "20px", position: "relative", left: "-1px" }}
                className="bigIcons"
              />{" "}
            </div>{" "}
            <p>Settings</p>{" "}
          </div>
        </Link>
        <Link to="/startgame" className="links">
          <div className="navItems">
            {" "}
            <div className="navThumbnailDiv">
              <img
                src={playIcon}
                alt=""
                style={{ width: "22px", position: "relative", left: "-1px" }}
                className="bigIcons"
              />{" "}
            </div>{" "}
            <p>Play Game</p>{" "}
          </div>
        </Link>
        <Link to="/leaderboard" className="links">
          <div className="navItems">
            {" "}
            <div className="navThumbnailDiv">
              <img
                src={leaderBoardIcon}
                alt=""
                style={{ width: "30px", position: "relative", left: "-4px" }}
                className="bigIcons"
              />{" "}
            </div>{" "}
            <p>Leaderboard</p>{" "}
          </div>
        </Link>
        {isLoggedIn && (
          <Link to="/profilepage" className="links">
            <div className="navItems">
              {" "}
              <div className="navThumbnailDiv">
                <img src={profileIcon} alt="" className="bigIcons" />{" "}
              </div>{" "}
              <p>Profile</p>{" "}
            </div>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup" className="links">
            <div className="navItems">
              {" "}
              <div className="navThumbnailDiv">
                <img
                  src={signUpIcon}
                  alt=""
                  style={{ position: "relative", left: "-2px" }}
                  className="bigIcons"
                />{" "}
              </div>{" "}
              <p>Signup/SignIn</p>{" "}
            </div>
          </Link>
        )}
      </div>
      {isLoggedIn && (
        <div id="logoutBtn" onClick={() => logOut()}>
          {" "}
          Logout
        </div>
      )}
    </div>
    </>
  );
}

export default Navigation;
