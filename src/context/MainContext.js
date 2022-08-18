import React from 'react';
import { createContext, useState } from 'react';

export const GeneralContext = createContext()

export function GeneralProvider({children}){

    let [menuOpen, setmenuOpen] = useState(false)

    let [finalArray, setfinalArray] = useState(false)

    let [currectGameInfo, setCurrectGameInfo] = useState(
        {
            mode: "numbers",
            numberOfPlayers: "1",
            gridSize: "4by4"
        }
    )



    return(
        <GeneralContext.Provider value={{setmenuOpen,menuOpen,setCurrectGameInfo,currectGameInfo,finalArray,setfinalArray}}>
            {children}
        </GeneralContext.Provider>
    )
}
export default GeneralContext;