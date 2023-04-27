import React, { useContext, useEffect } from "react";
import "./HomePage.css";
import menuIcon from "../Assets/icons/menuIcon.svg";
import logo from "../Assets/icons/logo.svg";
import { GeneralContext } from "../context/MainContext";
import { Link, useLocation } from "react-router-dom";
import homeImg from "../Assets/homePageImage2.png";
import questionMark from "../Assets/questionMark.png";

function HomePage() {
  const { setmenuOpen } = useContext(GeneralContext);

  const location = useLocation();

  useEffect(() => {
    setmenuOpen(false);
  }, [location]);

  const HomeImg = () => {
    return <div className="questionMarkDiv">
      <img src={questionMark} alt="" />
      <img src={questionMark} alt="" />
      <img src={questionMark} alt="" />
      <img src={questionMark} alt="" />
    </div>;
  };

  return (
    <div id="homepageContainer">
      <section id="homeHeader">
        <div className="logoDiv">
          <img src={logo} alt="" />
        </div>
        <img
          src={menuIcon}
          alt=""
          className="hoverable"
          onClick={() => setmenuOpen(true)}
        />
      </section>
      <section id="homePageContent">
        <div className="homeTextSection">
          <p className="welcomeText">Welcome to</p>
          <h1 className="siteName">Matched</h1>
          <p className="homeText">
            The home of the classical card game of Concentration
          </p>
        </div>
          {/* <img src={homeImg} alt="" id="homePageImg" /> */}
          <HomeImg/>
      </section>
      <section id="homePageStartButtonDiv">
        <Link to={"/settings"} className="links startLink">
          <button className="hoverable" id="homePageStartButton">
            START
          </button>
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
