import React, { useContext, useEffect } from 'react'
import "./HomePage.css"
import menuIcon from "../Assets/icons/menuIcon.svg"
import {GeneralContext} from "../context/MainContext"
import { Link, useLocation } from 'react-router-dom'


function HomePage() {
  const{ setmenuOpen } = useContext(GeneralContext)

  const location = useLocation();

  useEffect(() => {
    setmenuOpen(false)
  }, [location]);

  return (
    <div id='homepageContainer'>
      <section id='homeHeader'>
        <p id='homeHeaderText'>Matchup</p>
        <img src={menuIcon} alt='' onClick={()=>setmenuOpen(true)}/>
      </section>
      <section id='homePageContent'>
        <div id='homePageContentImageDiv'>

        </div>
        <p id='homePageContentTextDiv'>
          Find And Match The Correct Pair
        </p>
      </section>
      <section id='homePageStartButtonDiv'>
        <Link to={"/settings"} className = "links"><button id='homePageStartButton'>START</button></Link>
      </section>
    </div>
  )
}

export default HomePage