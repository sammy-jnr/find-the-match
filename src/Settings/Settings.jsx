import React, { useContext, useState, useEffect } from 'react'
import "./Settings.css"
import menuIcon from "../Assets/icons/menuIcon.svg"
import skipIcon from "../Assets/icons/skipIcon.svg"
import {GeneralContext} from "../context/MainContext"
import { Link, useLocation } from 'react-router-dom'

function Settings() {
    const{ setmenuOpen, setCurrectGameInfo } = useContext(GeneralContext)

    const location = useLocation();

    useEffect(() => {
      setmenuOpen(false)
    }, [location]);

    let [modeNumbers, setModeNumbers] = useState(true)
    let [modeLetters, setModeLetters] = useState(false)
    let [modeImages, setModeImages] = useState(false)




    const numbersMode = () =>{
        setModeNumbers(true);
        setModeLetters(false);
        setModeImages(false);
        setCurrectGameInfo((prev) => ({...prev, mode:"numbers"}))
    }
    const lettersMode = () =>{
        setModeNumbers(false);
        setModeLetters(true);
        setModeImages(false);
        setCurrectGameInfo((prev) => ({...prev, mode:"letters"}))
    }
    const imagesMode = () =>{
        setModeNumbers(false);
        setModeLetters(false);
        setModeImages(true);
        setCurrectGameInfo((prev) => ({...prev, mode:"images"}))
    }

    let [NOP1, setNOP1] = useState(true)
    let [NOP2, setNOP2] = useState(false)
    let [NOP3, setNOP3] = useState(false)
    let [NOP4, setNOP4] = useState(false)

    const numbersOfP1 = () =>{
        setNOP1(true);
        setNOP2(false);
        setNOP3(false);
        setNOP4(false);
        setCurrectGameInfo((prev) => ({...prev, numberOfPlayers: 1}))
    }
    const numbersOfP2 = () =>{
        setNOP1(false);
        setNOP2(true);
        setNOP3(false);
        setNOP4(false);
        setCurrectGameInfo((prev) => ({...prev, numberOfPlayers: 2}))
    }
    const numbersOfP3 = () =>{
        setNOP1(false);
        setNOP2(false);
        setNOP3(true);
        setNOP4(false);
        setCurrectGameInfo((prev) => ({...prev, numberOfPlayers: 3}))
    }
    const numbersOfP4 = () =>{
        setNOP1(false);
        setNOP2(false);
        setNOP3(false);
        setNOP4(true);
        setCurrectGameInfo((prev) => ({...prev, numberOfPlayers: 4}))
    }

    let [grid4By4, setGrid4By4] = useState(true)
    let [grid6By6, setGrid6By6] = useState(false)

    const gridIs4 = () =>{
        setGrid4By4(true);
        setGrid6By6(false);
        setCurrectGameInfo((prev) => ({...prev, gridSize: "4by4"}))
    }
    const gridIs6 = () =>{
        setGrid4By4(false);
        setGrid6By6(true);
        setCurrectGameInfo((prev) => ({...prev, gridSize: "6by6"}))
    }

    const Selected = {
        backgroundColor: "#000000d4",
        color: "white",
    }
    const NotSelected = {
        backgroundColor: "white",
        color: "#000000d4",
    }

  return (
    <div id='SettingsContainer'>
        <section id='settingsHeader'>
            <h2>Settings</h2>
            <img src={menuIcon} alt='' onClick={()=>setmenuOpen(true)}/>
        </section>
        <section id="skipSettingsSection">
            <div id='skipSettingsSectionDiv'>
                <img src={skipIcon} alt="" id='skipIcon'/>
                <p>SKIP</p>
            </div>
        </section>
        <section id='selectModeSection'>
            <h3 id="selectModeTitle">Mode</h3>
            <div id='selectModeInner' >
                <div className='selectModeItemsDiv' onClick={() =>numbersMode()}>
                    <div className='selectModeItemsImgDiv'>
                        <div className="selectModeItemsSelectOuter">
                            {modeNumbers && <div className="selectModeItemsSelectInner"></div>}
                        </div>
                    </div>
                    <div className="selectModeItemsTextDiv">Numbers</div>
                </div>
                <div className='selectModeItemsDiv' onClick={() =>lettersMode()}>
                    <div className='selectModeItemsImgDiv'>
                        <div className="selectModeItemsSelectOuter">
                            {modeLetters && <div className="selectModeItemsSelectInner"></div>}
                        </div>
                    </div>
                    <div className="selectModeItemsTextDiv">Letters</div>
                </div>
                <div className='selectModeItemsDiv' onClick={() =>imagesMode()}>
                    <div className='selectModeItemsImgDiv'>
                        <div className="selectModeItemsSelectOuter">
                            {modeImages && <div className="selectModeItemsSelectInner"></div>}
                        </div>
                    </div>
                    <div className="selectModeItemsTextDiv">Images</div>
                </div>
            </div>
        </section>
        <section id='numberOfPlayersSection'>
            <h3 id="selectNumberOfPlayersTitle">Number of players</h3>
            <div id='numberOfPlayersInner' >
                <div className='numberOfPlayersItems' onClick={() =>{numbersOfP1()}}>
                    <div className='numberOfPlayersImgDiv' >
                        <div className='numberOfPlayersSelectOuter' >
                            {NOP1 &&<div className='numberOfPlayersSelectInner' ></div>}
                        </div>
                    </div>
                    <div className='numberOfPlayersTextDiv' >Solo</div>
                </div>
                <div className='numberOfPlayersItems' onClick={() =>{numbersOfP2()}}>
                    <div className='numberOfPlayersImgDiv' >
                        <div className='numberOfPlayersSelectOuter' >
                            {NOP2 &&<div className='numberOfPlayersSelectInner' ></div>}
                        </div>
                    </div>
                    <div className='numberOfPlayersTextDiv' >2 Players</div>
                </div>
                <div className='numberOfPlayersItems' onClick={() =>{numbersOfP3()}}>
                    <div className='numberOfPlayersImgDiv' >
                        <div className='numberOfPlayersSelectOuter' >
                            {NOP3 &&<div className='numberOfPlayersSelectInner' ></div>}
                        </div>
                    </div>
                    <div className='numberOfPlayersTextDiv' >3 Players</div>
                </div>
                <div className='numberOfPlayersItems' onClick={() =>{numbersOfP4()}}>
                    <div className='numberOfPlayersImgDiv' >
                        <div className='numberOfPlayersSelectOuter' >
                            {NOP4 &&<div className='numberOfPlayersSelectInner' ></div>}
                        </div>
                    </div>
                    <div className='numberOfPlayersTextDiv' >4 players</div>
                </div>
            </div>
        </section>
        <section id='gridSizeSection'>
            <h3 id="grigSizeTitle">Grid size</h3>
            <div id='gridSizeInner'>
                {grid4By4 &&<div className='gridSizeItems' style={Selected}  onClick={() => gridIs4()}>4 * 4</div>}
                {!grid4By4 &&<div className='gridSizeItems' style={NotSelected}  onClick={() => gridIs4()}>4 * 4</div>}
                {grid6By6 &&<div className='gridSizeItems' style={Selected} onClick={() => gridIs6()}>6 * 6</div>}
                {!grid6By6 &&<div className='gridSizeItems' style={NotSelected} onClick={() => gridIs6()}>6 * 6</div>}
            </div>
        </section>
        <section id='startGameSection'>
           <Link to={"/startgame"}> <button id='startGameButton'>START GAME</button></Link>
        </section>
    </div>
  )
}

export default Settings