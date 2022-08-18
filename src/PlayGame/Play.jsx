import React from 'react'
import "./Play.css"
import menuIcon from "../Assets/icons/menuIcon.svg"
import { useState } from 'react'
import { useEffect } from 'react'
import {finalArray} from "./Random"

function Play() {

    let By4 = true


    function FourByFour(){

        let [FirstChoosenItem, setFirstChoosenItem] = useState("")
        let [SecondChoosenItem, setSecondChoosenItem] = useState("")

        let AreadyOpenedArray = []

        let [isOpenBox1, setisOpenBox1] = useState(false)
        let [isOpenBox2, setisOpenBox2] = useState(false)
        let [isOpenBox3, setisOpenBox3] = useState(false)
        let [isOpenBox4, setisOpenBox4] = useState(false)
        let [isOpenBox5, setisOpenBox5] = useState(false)
        let [isOpenBox6, setisOpenBox6] = useState(false)
        let [isOpenBox7, setisOpenBox7] = useState(false)
        let [isOpenBox8, setisOpenBox8] = useState(false)
        let [isOpenBox9, setisOpenBox9] = useState(false)
        let [isOpenBox10, setisOpenBox10] = useState(false)
        let [isOpenBox11, setisOpenBox11] = useState(false)
        let [isOpenBox12, setisOpenBox12] = useState(false)
        let [isOpenBox13, setisOpenBox13] = useState(false)
        let [isOpenBox14, setisOpenBox14] = useState(false)
        let [isOpenBox15, setisOpenBox15] = useState(false)
        let [isOpenBox16, setisOpenBox16] = useState(false)



        let [isAcceptedBox1, setisAcceptedBox1] = useState(false)
        let [isAcceptedBox2, setisAcceptedBox2] = useState(false)
        let [isAcceptedBox3, setisAcceptedBox3] = useState(false)
        let [isAcceptedBox4, setisAcceptedBox4] = useState(false)
        let [isAcceptedBox5, setisAcceptedBox5] = useState(false)
        let [isAcceptedBox6, setisAcceptedBox6] = useState(false)
        let [isAcceptedBox7, setisAcceptedBox7] = useState(false)
        let [isAcceptedBox8, setisAcceptedBox8] = useState(false)
        let [isAcceptedBox9, setisAcceptedBox9] = useState(false)
        let [isAcceptedBox10, setisAcceptedBox10] = useState(false)
        let [isAcceptedBox11, setisAcceptedBox11] = useState(false)
        let [isAcceptedBox12, setisAcceptedBox12] = useState(false)
        let [isAcceptedBox13, setisAcceptedBox13] = useState(false)
        let [isAcceptedBox14, setisAcceptedBox14] = useState(false)
        let [isAcceptedBox15, setisAcceptedBox15] = useState(false)
        let [isAcceptedBox16, setisAcceptedBox16] = useState(false)

        function settingIsAccepted (id){
            if (id === "4By4Box1"){setisAcceptedBox1(true)}
            else if(id === "4By4Box2"){setisAcceptedBox2(true)}
            else if(id === "4By4Box3"){setisAcceptedBox3(true)}
            else if(id === "4By4Box4"){setisAcceptedBox4(true)}
            else if(id === "4By4Box5"){setisAcceptedBox5(true)}
            else if(id === "4By4Box6"){setisAcceptedBox6(true)}
            else if(id === "4By4Box7"){setisAcceptedBox7(true)}
            else if(id === "4By4Box8"){setisAcceptedBox8(true)}
            else if(id === "4By4Box9"){setisAcceptedBox9(true)}
            else if(id === "4By4Box10"){setisAcceptedBox10(true)}
            else if(id === "4By4Box11"){setisAcceptedBox11(true)}
            else if(id === "4By4Box12"){setisAcceptedBox12(true)}
            else if(id === "4By4Box13"){setisAcceptedBox13(true)}
            else if(id === "4By4Box14"){setisAcceptedBox14(true)}
            else if(id === "4By4Box15"){setisAcceptedBox15(true)}
            else if(id === "4By4Box16"){setisAcceptedBox16(true)}
            else {return false;}
        }

        

        function convertIdToValue(id) {
            if (id === "4By4Box1"){return finalArray[0]}
            else if(id === "4By4Box2"){return finalArray[1]}
            else if(id === "4By4Box3"){return finalArray[2]}
            else if(id === "4By4Box4"){return finalArray[3]}
            else if(id === "4By4Box5"){return finalArray[4]}
            else if(id === "4By4Box6"){return finalArray[5]}
            else if(id === "4By4Box7"){return finalArray[6]}
            else if(id === "4By4Box8"){return finalArray[7]}
            else if(id === "4By4Box9"){return finalArray[8]}
            else if(id === "4By4Box10"){return finalArray[9]}
            else if(id === "4By4Box11"){return finalArray[10]}
            else if(id === "4By4Box12"){return finalArray[11]}
            else if(id === "4By4Box13"){return finalArray[12]}
            else if(id === "4By4Box14"){return finalArray[13]}
            else if(id === "4By4Box15"){return finalArray[14]}
            else if(id === "4By4Box16"){return finalArray[15]}
            else {return false;}
        }
        function closeIsOpen(id) {
            if (id === "4By4Box1"){return setisOpenBox1(false)}
            else if(id === "4By4Box2"){return setisOpenBox2(false)}
            else if(id === "4By4Box3"){return setisOpenBox3(false)}
            else if(id === "4By4Box4"){return setisOpenBox4(false)}
            else if(id === "4By4Box5"){return setisOpenBox5(false)}
            else if(id === "4By4Box6"){return setisOpenBox6(false)}
            else if(id === "4By4Box7"){return setisOpenBox7(false)}
            else if(id === "4By4Box8"){return setisOpenBox8(false)}
            else if(id === "4By4Box9"){return setisOpenBox9(false)}
            else if(id === "4By4Box10"){return setisOpenBox10(false)}
            else if(id === "4By4Box11"){return setisOpenBox11(false)}
            else if(id === "4By4Box12"){return setisOpenBox12(false)}
            else if(id === "4By4Box13"){return setisOpenBox13(false)}
            else if(id === "4By4Box14"){return setisOpenBox14(false)}
            else if(id === "4By4Box15"){return setisOpenBox15(false)}
            else if(id === "4By4Box16"){return setisOpenBox16(false)}
            else {return false;}
        }

        let [loading, setLoading] = useState(false); 

        const PlayGame = (e) =>{
            if(loading === true)return;
            if(AreadyOpenedArray.includes(e.target.id))return;
            if(e.target.id === FirstChoosenItem)return;
            let selectedBox = e.target.id
            console.log(e.target.id)
            if(FirstChoosenItem === ""){
                setFirstChoosenItem(selectedBox);
                if(selectedBox === "4By4Box1"){setisOpenBox1(true)}
                else if(selectedBox === "4By4Box2"){setisOpenBox2(true)}
                else if(selectedBox === "4By4Box3"){setisOpenBox3(true)}
                else if(selectedBox === "4By4Box4"){setisOpenBox4(true)}
                else if(selectedBox === "4By4Box5"){setisOpenBox5(true)}
                else if(selectedBox === "4By4Box6"){setisOpenBox6(true)}
                else if(selectedBox === "4By4Box7"){setisOpenBox7(true)}
                else if(selectedBox === "4By4Box8"){setisOpenBox8(true)}
                else if(selectedBox === "4By4Box9"){setisOpenBox9(true)}
                else if(selectedBox === "4By4Box10"){setisOpenBox10(true)}
                else if(selectedBox === "4By4Box11"){setisOpenBox11(true)}
                else if(selectedBox === "4By4Box12"){setisOpenBox12(true)}
                else if(selectedBox === "4By4Box13"){setisOpenBox13(true)}
                else if(selectedBox === "4By4Box14"){setisOpenBox14(true)}
                else if(selectedBox === "4By4Box15"){setisOpenBox15(true)}
                else if(selectedBox === "4By4Box16"){setisOpenBox16(true)}
                else{return false}
                console.log(selectedBox)
                return;
            }else{
                
                setSecondChoosenItem(selectedBox);
                if(selectedBox === "4By4Box1"){setisOpenBox1(true)}
                else if(selectedBox === "4By4Box2"){setisOpenBox2(true)}
                else if(selectedBox === "4By4Box3"){setisOpenBox3(true)}
                else if(selectedBox === "4By4Box4"){setisOpenBox4(true)}
                else if(selectedBox === "4By4Box5"){setisOpenBox5(true)}
                else if(selectedBox === "4By4Box6"){setisOpenBox6(true)}
                else if(selectedBox === "4By4Box7"){setisOpenBox7(true)}
                else if(selectedBox === "4By4Box8"){setisOpenBox8(true)}
                else if(selectedBox === "4By4Box9"){setisOpenBox9(true)}
                else if(selectedBox === "4By4Box10"){setisOpenBox10(true)}
                else if(selectedBox === "4By4Box11"){setisOpenBox11(true)}
                else if(selectedBox === "4By4Box12"){setisOpenBox12(true)}
                else if(selectedBox === "4By4Box13"){setisOpenBox13(true)}
                else if(selectedBox === "4By4Box14"){setisOpenBox14(true)}
                else if(selectedBox === "4By4Box15"){setisOpenBox15(true)}
                else if(selectedBox === "4By4Box16"){setisOpenBox16(true)}
                else{return false}
                console.log(selectedBox)
                setLoading(true);
                return;
            }
        }
        console.log(FirstChoosenItem)
        console.log(finalArray)
        useEffect(()=>{
            let myTimeout
            if(SecondChoosenItem === "" )return;
            if(convertIdToValue(FirstChoosenItem) === convertIdToValue(SecondChoosenItem)){
                AreadyOpenedArray.push(SecondChoosenItem);
                AreadyOpenedArray.push(FirstChoosenItem);
                settingIsAccepted(FirstChoosenItem);
                settingIsAccepted(SecondChoosenItem);
                setFirstChoosenItem("");
                setSecondChoosenItem("");
                console.log(isAcceptedBox3)
                setLoading(false);
                
            }else{
                myTimeout = setTimeout(function(){
                    closeIsOpen(FirstChoosenItem);
                    closeIsOpen(SecondChoosenItem);
                    setFirstChoosenItem("");
                    setSecondChoosenItem("");
                    setLoading(false);
                },1000);
            }
            return() =>{
                clearTimeout(myTimeout);
            }
        },[SecondChoosenItem])
        console.log(FirstChoosenItem)
        console.log(isAcceptedBox3)
        
        return(
            <div id='gridContainer4by4' >
                <div style={{ backgroundColor:  isOpenBox1 && !isAcceptedBox1 ? "grey": isAcceptedBox1 ? "green": "red" }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box1' >{isOpenBox1? finalArray[0] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox2 && !isAcceptedBox2 ? "grey": isAcceptedBox2 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box2' >{isOpenBox2? finalArray[1] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox3 && !isAcceptedBox3 ? "grey": isAcceptedBox3 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box3' >{isOpenBox3? finalArray[2] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox4 && !isAcceptedBox4 ? "grey": isAcceptedBox4 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box4' >{isOpenBox4? finalArray[3] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox5 && !isAcceptedBox5 ? "grey": isAcceptedBox5 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box5' >{isOpenBox5? finalArray[4] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox6 && !isAcceptedBox6 ? "grey": isAcceptedBox6 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box6' >{isOpenBox6? finalArray[5] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox7 && !isAcceptedBox7 ? "grey": isAcceptedBox7 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box7' >{isOpenBox7? finalArray[6] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox8 && !isAcceptedBox8 ? "grey": isAcceptedBox8 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box8' >{isOpenBox8? finalArray[7] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox9 && !isAcceptedBox9 ? "grey": isAcceptedBox9 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box9' >{isOpenBox9? finalArray[8] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox10 && !isAcceptedBox10 ? "grey": isAcceptedBox10 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box10' >{isOpenBox10? finalArray[9] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox11 && !isAcceptedBox11 ? "grey": isAcceptedBox11 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box11' >{isOpenBox11? finalArray[10] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox12 && !isAcceptedBox12 ? "grey": isAcceptedBox12 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box12' >{isOpenBox12? finalArray[11] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox13 && !isAcceptedBox13 ? "grey": isAcceptedBox13 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box13' >{isOpenBox13? finalArray[12] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox14 && !isAcceptedBox14 ? "grey": isAcceptedBox14 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box14' >{isOpenBox14? finalArray[13] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox15 && !isAcceptedBox15 ? "grey": isAcceptedBox15 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box15' >{isOpenBox15? finalArray[14] : ""}</div>
                <div style={{ backgroundColor:  isOpenBox16 && !isAcceptedBox16 ? "grey": isAcceptedBox16 ? "green": "red"  }}  onClick={(e)=>{PlayGame(e)}} className='gridContainer4by4Items' id='4By4Box16' >{isOpenBox16? finalArray[15] : ""}</div>
            </div>
        )
    }






  return (
    <div id='playGameContainer'>
        <section id='playGameHeader' >
            <div id='playGameHeaderInner' >
                <h3 id='playGameType' >Single player</h3>
                <div id='playGameTimer' >5.00</div>
            </div>
            <img src={menuIcon} alt="" />
        </section>
        {By4 ? <FourByFour/> : ""}
    </div>
  )
}

export default Play