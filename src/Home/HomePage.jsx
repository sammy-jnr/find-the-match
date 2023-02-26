import React, { useContext, useEffect } from 'react'
import "./HomePage.css"
import menuIcon from "../Assets/icons/menuIcon.svg"
import {GeneralContext} from "../context/MainContext"
import { Link, useLocation } from 'react-router-dom'
import homeImg from "../Assets/homePageImage2.png"


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
        <img src={menuIcon} alt='' className='hoverable' onClick={()=>setmenuOpen(true)}/>
      </section>
      <section id='homePageContent'>
        <p id='homePageContentTextDiv'>
          Find And Match The Correct Pair
        </p>
        <div id='homePageContentImageDiv'>
          <img src={homeImg} alt="" id='homePageImg'/>
        </div>
        
      </section>
      <section id='homePageStartButtonDiv'>
        <Link to={"/settings"} className = "links"><button className='hoverable' id='homePageStartButton'>START</button></Link>
      </section>
    </div>
  )
}

export default HomePage