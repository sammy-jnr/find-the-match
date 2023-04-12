import React from 'react';
import { createContext, useState } from 'react';

export const GeneralContext = createContext()

export function GeneralProvider({children}){

    let [menuOpen, setmenuOpen] = useState(false)

    let [finalArray, setfinalArray] = useState(false)

    let [currectGameInfo, setCurrectGameInfo] = useState(
        {
            mode: "numbers",
            numberOfPlayers: 1,
            gridSize: "4by4"
        }
    )

    let [playersScores, setplayersScores] = useState([
        {
            id: 1,
            score: 0,
            name: "player1",
        },
        {
            id: 2,
            score: 0,
            name: "player2",
        },
        {
            id: 3,
            score: 0,
            name: "player3",
        },
        {
            id: 4,
            score: 0,
            name: "player4",
        },
    ])

    const [playerNames, setplayerNames] = useState({
        player1: "player1",
        player2: "player2",
        player3: "player3",
        player4: "player4"
    });

    let [singlePlayerScore, setsinglePlayerScore] = useState(0)

    let [numberOfAttempts, setnumberOfAttempts] = useState(0)
    let [timeSpent, settimeSpent] = useState(0)


    return(
        <GeneralContext.Provider value={{
            setmenuOpen,
            menuOpen,
            setCurrectGameInfo,
            currectGameInfo,
            finalArray,
            setfinalArray,
            playersScores,
            setplayersScores,
            numberOfAttempts,
            setnumberOfAttempts,
            timeSpent,settimeSpent,
            singlePlayerScore,
            setsinglePlayerScore,
            setplayerNames,
            playerNames
            }}>
            {children}
        </GeneralContext.Provider>
    )
}
export default GeneralContext;