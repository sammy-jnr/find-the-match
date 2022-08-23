import React, { useState, useEffect, useContext } from 'react'
import arrowBack from "../Assets/icons/arrowBack.svg"
import "./Profile.css"
import { useNavigate, useLocation } from "react-router-dom"
import {GeneralContext} from "../context/MainContext"
import { AuthContext } from "../context/AuthenticationContext"



function ProfilePage() {

    const navigate = useNavigate()


    const{ setmenuOpen } = useContext(GeneralContext)
    const{ username } = useContext(AuthContext)
    
    const location = useLocation();
    useEffect(() => {
      setmenuOpen(false)
    }, [location]);


    let [fourByFour, setfourByFour] = useState(true)

    function Show4by4 (){
        return(
            <div className='selectedSection'>
                <section className='last5Games'>
                    <div className='last5GamesText'>Last 5 games</div>
                    <div className='last5GamesItems'>
                        <div className='last5GamesItemsInner'>Date</div>
                        <div className='last5GamesItemsInner'>time</div>
                        <div className='last5GamesItemsInner'>score</div>
                    </div>
                    <div className='last5GamesItems'>
                        <div className='last5GamesItemsInner'>Date</div>
                        <div className='last5GamesItemsInner'>time</div>
                        <div className='last5GamesItemsInner'>score</div>
                    </div>
                    <div className='last5GamesItems'>
                        <div className='last5GamesItemsInner'>Date</div>
                        <div className='last5GamesItemsInner'>time</div>
                        <div className='last5GamesItemsInner'>score</div>
                    </div>
                    <div className='last5GamesItems'>
                        <div className='last5GamesItemsInner'>Date</div>
                        <div className='last5GamesItemsInner'>time</div>
                        <div className='last5GamesItemsInner'>score</div>
                    </div>
                    <div className='last5GamesItems'>
                        <div className='last5GamesItemsInner'>Date</div>
                        <div className='last5GamesItemsInner'>time</div>
                        <div className='last5GamesItemsInner'>score</div>
                    </div>
                    <section className='last5GamesShowMore'></section>
                </section>
                <section className='selectedSectionInfo'>
                    <div className='selectedSectionInfoItems'><div>Total Games</div> <div>143 games</div></div>
                    <div className='selectedSectionInfoItems'><div>Average time</div> <div>1:30</div></div>
                    <div className='selectedSectionInfoItems'><div>Average Score</div> <div>143</div></div>
                    <div className='selectedSectionInfoItems'><div>Highest Score</div> <div>143 games</div></div>
                </section>
            </div>
        )
    }
    function Show6by6 (){
        return(
            <div></div>
        )
    }

    const SelectedA ={
        backgroundColor: "black",
        color: "white",
    }
    const NotSelectedA ={
        backgroundColor: "transparent",
        color: "black",
    }
    const SelectedB ={
        border: "2px solid black",
        borderTop: "none",
        borderBottom: "none",
    }
    const NotSelectedB ={
        border: "none",
        borderBottom: "2px solid black",
    }

  return (
    <div id='profileContainer'>
        <section id='HeaderSecction' >
            <img src={arrowBack} alt="" id='arrowBack' onClick={() => navigate(-1)} />
            <div id='HeaderSecctionInner'>
                <div id='profileAvatar'></div>
                <div id='profileName'>{username} <div id='profileId'>#2030</div></div>
            </div>
        </section>
        <section id='profileInfoContainer'>
            <div className='profileInfoDetails'>Games played: <div className='profileInfoDetailsInner'>1246</div> </div>
            <div className='profileInfoDetails'>Games won: <div className='profileInfoDetailsInner'>1000</div></div>
            <div className='profileInfoDetails'>Games lost:<div className='profileInfoDetailsInner'>246</div></div>
        </section>
        <section>
            <div id='profileSelectMode'>
                <div style={fourByFour ? SelectedA : NotSelectedA} id='profileSelection4by4' onClick={()=> setfourByFour(true)} >4*4</div>
                <div style={fourByFour ? NotSelectedA : SelectedA} id='profileSelection6by6'onClick={()=>setfourByFour(false)} >6*6</div>
            </div>
            <div id='connectors'>
                <div style={fourByFour ? SelectedB : NotSelectedB} id='connector1'></div>
                <div style={fourByFour ? NotSelectedB : SelectedB} id='connector2'></div>
            </div>
            <div id='displaySelected'>
                {fourByFour ? <Show4by4/> : <Show6by6/> }
            </div>

        </section>
    </div>
  )
}

export default ProfilePage