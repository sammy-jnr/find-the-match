import React from "react";
import "./Play.css";
import menuIcon from "../Assets/icons/menuIcon.svg";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { GeneralContext } from "../context/MainContext";
import { AuthContext } from "../context/AuthenticationContext";
import { useNavigate, useLocation } from "react-router-dom";

function Play() {
  const {
    currectGameInfo,
    setmenuOpen,
    playersScores,
    setplayersScores,
    setnumberOfAttempts,
    settimeSpent,
    setsinglePlayerScore,
  } = useContext(GeneralContext);

  const { gameEnded, setmodeIs4by4, setgameWon } = useContext(AuthContext);

  const location = useLocation();
  useEffect(() => {
    setmenuOpen(false);
  }, [location]);

  let navigate = useNavigate();

  let  [numbersArray, setnumbersArray] = useState();
  let  [lettersArray, setlettersArray] = useState();
  let  [numbersArrayL, setnumbersArrayL] = useState();
  let  [lettersArrayL, setlettersArrayL] = useState();

  useEffect(() => {
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    let numberArrayTemp = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
    setnumbersArray(shuffle(numberArrayTemp));
    let lettersArrayTemp = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
    setlettersArray(shuffle(lettersArrayTemp));
    let numberArrayTempL = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18]
    setnumbersArrayL(shuffle(numberArrayTempL));
    let lettersArrayTempL = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H',"I","I",'J',"J","k","k","L","L","M","M","O","O","P","P","Q","Q","R","R"]
    setlettersArrayL(shuffle(lettersArrayTempL));
  },[])

  let [By4, setBy4] = useState(true);
  let [By6, setBy6] = useState(false);

  let mainArray = [];


  if (currectGameInfo.mode === "numbers") {
    if (currectGameInfo.gridSize === "6by6") {
      mainArray = numbersArrayL;
    } else {
      mainArray = numbersArray;
    }
  }
  if (currectGameInfo.mode === "letters") {
    if (currectGameInfo.gridSize === "6by6") {
      mainArray = lettersArrayL;
    } else {
      mainArray = lettersArray;
    }
  }
  if (currectGameInfo.mode === "images") {
    if (currectGameInfo.gridSize === "6by6") {
      mainArray = numbersArrayL;
    } else {
      mainArray = numbersArray;
    }
  }
  useEffect(()=>{
    if (currectGameInfo.gridSize === "4by4") {
      setBy4(true);
      setBy6(false);
      setmodeIs4by4(true);      
    }
    if (currectGameInfo.gridSize === "6by6") {
      setBy4(false);
      setBy6(true);
      setmodeIs4by4(false);
      console.log("true")
    }
  },[])
  

  useEffect(() => {
    playersScores[0].score = 0;
    playersScores[1].score = 0;
    playersScores[2].score = 0;
    playersScores[3].score = 0;
    setnumberOfAttempts(0);
  }, []);

  let playerNumber = currectGameInfo.numberOfPlayers;

  let [count, setcount] = useState(0);
  let [currentPlayer, setcurrentPlayer] = useState(1);

  let [gameOver, setGameOver] = useState(false);

  function checkPlayer() {
    if (currectGameInfo.numberOfPlayers < 2) return;
    if (AreadyOpenedArray.length > 13) {
      setGameOver(true);
      return;
    }
    setcount((prev) => prev + 1);
    if (currentPlayer > currectGameInfo.numberOfPlayers - 1) {
      setcurrentPlayer(0);
    }
    setcurrentPlayer((prev) => prev + 1);
    setcount(0);
  }

  function changeScore(id) {
    setplayersScores((prev) => {
      return prev.map((player) => {
        if (player.id === id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    });
  }
  let [FirstChoosenItem, setFirstChoosenItem] = useState("");
  let [SecondChoosenItem, setSecondChoosenItem] = useState("");
  let [AreadyOpenedArray, setAreadyOpenedArray] = useState([]);
  let [isOpenBox1, setisOpenBox1] = useState(false);
  let [isOpenBox2, setisOpenBox2] = useState(false);
  let [isOpenBox3, setisOpenBox3] = useState(false);
  let [isOpenBox4, setisOpenBox4] = useState(false);
  let [isOpenBox5, setisOpenBox5] = useState(false);
  let [isOpenBox6, setisOpenBox6] = useState(false);
  let [isOpenBox7, setisOpenBox7] = useState(false);
  let [isOpenBox8, setisOpenBox8] = useState(false);
  let [isOpenBox9, setisOpenBox9] = useState(false);
  let [isOpenBox10, setisOpenBox10] = useState(false);
  let [isOpenBox11, setisOpenBox11] = useState(false);
  let [isOpenBox12, setisOpenBox12] = useState(false);
  let [isOpenBox13, setisOpenBox13] = useState(false);
  let [isOpenBox14, setisOpenBox14] = useState(false);
  let [isOpenBox15, setisOpenBox15] = useState(false);
  let [isOpenBox16, setisOpenBox16] = useState(false);
  let [isOpenBox17, setisOpenBox17] = useState(false);
  let [isOpenBox18, setisOpenBox18] = useState(false);
  let [isOpenBox19, setisOpenBox19] = useState(false);
  let [isOpenBox20, setisOpenBox20] = useState(false);
  let [isOpenBox21, setisOpenBox21] = useState(false);
  let [isOpenBox22, setisOpenBox22] = useState(false);
  let [isOpenBox23, setisOpenBox23] = useState(false);
  let [isOpenBox24, setisOpenBox24] = useState(false);
  let [isOpenBox25, setisOpenBox25] = useState(false);
  let [isOpenBox26, setisOpenBox26] = useState(false);
  let [isOpenBox27, setisOpenBox27] = useState(false);
  let [isOpenBox28, setisOpenBox28] = useState(false);
  let [isOpenBox29, setisOpenBox29] = useState(false);
  let [isOpenBox30, setisOpenBox30] = useState(false);
  let [isOpenBox31, setisOpenBox31] = useState(false);
  let [isOpenBox32, setisOpenBox32] = useState(false);
  let [isOpenBox33, setisOpenBox33] = useState(false);
  let [isOpenBox34, setisOpenBox34] = useState(false);
  let [isOpenBox35, setisOpenBox35] = useState(false);
  let [isOpenBox36, setisOpenBox36] = useState(false);

  let [isAcceptedBox1, setisAcceptedBox1] = useState(false);
  let [isAcceptedBox2, setisAcceptedBox2] = useState(false);
  let [isAcceptedBox3, setisAcceptedBox3] = useState(false);
  let [isAcceptedBox4, setisAcceptedBox4] = useState(false);
  let [isAcceptedBox5, setisAcceptedBox5] = useState(false);
  let [isAcceptedBox6, setisAcceptedBox6] = useState(false);
  let [isAcceptedBox7, setisAcceptedBox7] = useState(false);
  let [isAcceptedBox8, setisAcceptedBox8] = useState(false);
  let [isAcceptedBox9, setisAcceptedBox9] = useState(false);
  let [isAcceptedBox10, setisAcceptedBox10] = useState(false);
  let [isAcceptedBox11, setisAcceptedBox11] = useState(false);
  let [isAcceptedBox12, setisAcceptedBox12] = useState(false);
  let [isAcceptedBox13, setisAcceptedBox13] = useState(false);
  let [isAcceptedBox14, setisAcceptedBox14] = useState(false);
  let [isAcceptedBox15, setisAcceptedBox15] = useState(false);
  let [isAcceptedBox16, setisAcceptedBox16] = useState(false);
  let [isAcceptedBox17, setisAcceptedBox17] = useState(false);
  let [isAcceptedBox18, setisAcceptedBox18] = useState(false);
  let [isAcceptedBox19, setisAcceptedBox19] = useState(false);
  let [isAcceptedBox20, setisAcceptedBox20] = useState(false);
  let [isAcceptedBox21, setisAcceptedBox21] = useState(false);
  let [isAcceptedBox22, setisAcceptedBox22] = useState(false);
  let [isAcceptedBox23, setisAcceptedBox23] = useState(false);
  let [isAcceptedBox24, setisAcceptedBox24] = useState(false);
  let [isAcceptedBox25, setisAcceptedBox25] = useState(false);
  let [isAcceptedBox26, setisAcceptedBox26] = useState(false);
  let [isAcceptedBox27, setisAcceptedBox27] = useState(false);
  let [isAcceptedBox28, setisAcceptedBox28] = useState(false);
  let [isAcceptedBox29, setisAcceptedBox29] = useState(false);
  let [isAcceptedBox30, setisAcceptedBox30] = useState(false);
  let [isAcceptedBox31, setisAcceptedBox31] = useState(false);
  let [isAcceptedBox32, setisAcceptedBox32] = useState(false);
  let [isAcceptedBox33, setisAcceptedBox33] = useState(false);
  let [isAcceptedBox34, setisAcceptedBox34] = useState(false);
  let [isAcceptedBox35, setisAcceptedBox35] = useState(false);
  let [isAcceptedBox36, setisAcceptedBox36] = useState(false);

  function settingIsAccepted(id) {
    if (id === "4By4Box1") {
      setisAcceptedBox1(true);
    } else if (id === "4By4Box2") {
      setisAcceptedBox2(true);
    } else if (id === "4By4Box3") {
      setisAcceptedBox3(true);
    } else if (id === "4By4Box4") {
      setisAcceptedBox4(true);
    } else if (id === "4By4Box5") {
      setisAcceptedBox5(true);
    } else if (id === "4By4Box6") {
      setisAcceptedBox6(true);
    } else if (id === "4By4Box7") {
      setisAcceptedBox7(true);
    } else if (id === "4By4Box8") {
      setisAcceptedBox8(true);
    } else if (id === "4By4Box9") {
      setisAcceptedBox9(true);
    } else if (id === "4By4Box10") {
      setisAcceptedBox10(true);
    } else if (id === "4By4Box11") {
      setisAcceptedBox11(true);
    } else if (id === "4By4Box12") {
      setisAcceptedBox12(true);
    } else if (id === "4By4Box13") {
      setisAcceptedBox13(true);
    } else if (id === "4By4Box14") {
      setisAcceptedBox14(true);
    } else if (id === "4By4Box15") {
      setisAcceptedBox15(true);
    } else if (id === "4By4Box16") {
      setisAcceptedBox16(true);
    } else if (id === "4By4Box17") {
      setisAcceptedBox17(true);
    } else if (id === "4By4Box18") {
      setisAcceptedBox18(true);
    } else if (id === "4By4Box19") {
      setisAcceptedBox19(true);
    } else if (id === "4By4Box20") {
      setisAcceptedBox20(true);
    } else if (id === "4By4Box21") {
      setisAcceptedBox21(true);
    } else if (id === "4By4Box22") {
      setisAcceptedBox22(true);
    } else if (id === "4By4Box23") {
      setisAcceptedBox23(true);
    } else if (id === "4By4Box24") {
      setisAcceptedBox24(true);
    } else if (id === "4By4Box25") {
      setisAcceptedBox25(true);
    } else if (id === "4By4Box26") {
      setisAcceptedBox26(true);
    } else if (id === "4By4Box27") {
      setisAcceptedBox27(true);
    } else if (id === "4By4Box28") {
      setisAcceptedBox28(true);
    } else if (id === "4By4Box29") {
      setisAcceptedBox29(true);
    } else if (id === "4By4Box30") {
      setisAcceptedBox30(true);
    } else if (id === "4By4Box31") {
      setisAcceptedBox31(true);
    } else if (id === "4By4Box32") {
      setisAcceptedBox32(true);
    } else if (id === "4By4Box33") {
      setisAcceptedBox33(true);
    } else if (id === "4By4Box34") {
      setisAcceptedBox34(true);
    } else if (id === "4By4Box35") {
      setisAcceptedBox35(true);
    } else if (id === "4By4Box36") {
      setisAcceptedBox36(true);
    } else {
      return false;
    }
  }

  function convertIdToValue(id) {
    if (id === "4By4Box1") {
      return mainArray[0];
    } else if (id === "4By4Box2") {
      return mainArray[1];
    } else if (id === "4By4Box3") {
      return mainArray[2];
    } else if (id === "4By4Box4") {
      return mainArray[3];
    } else if (id === "4By4Box5") {
      return mainArray[4];
    } else if (id === "4By4Box6") {
      return mainArray[5];
    } else if (id === "4By4Box7") {
      return mainArray[6];
    } else if (id === "4By4Box8") {
      return mainArray[7];
    } else if (id === "4By4Box9") {
      return mainArray[8];
    } else if (id === "4By4Box10") {
      return mainArray[9];
    } else if (id === "4By4Box11") {
      return mainArray[10];
    } else if (id === "4By4Box12") {
      return mainArray[11];
    } else if (id === "4By4Box13") {
      return mainArray[12];
    } else if (id === "4By4Box14") {
      return mainArray[13];
    } else if (id === "4By4Box15") {
      return mainArray[14];
    } else if (id === "4By4Box16") {
      return mainArray[15];
    } else if (id === "4By4Box17") {
      return mainArray[16];
    } else if (id === "4By4Box18") {
      return mainArray[17];
    } else if (id === "4By4Box19") {
      return mainArray[18];
    } else if (id === "4By4Box20") {
      return mainArray[19];
    } else if (id === "4By4Box21") {
      return mainArray[20];
    } else if (id === "4By4Box22") {
      return mainArray[21];
    } else if (id === "4By4Box23") {
      return mainArray[22];
    } else if (id === "4By4Box24") {
      return mainArray[23];
    } else if (id === "4By4Box25") {
      return mainArray[24];
    } else if (id === "4By4Box26") {
      return mainArray[25];
    } else if (id === "4By4Box27") {
      return mainArray[26];
    } else if (id === "4By4Box28") {
      return mainArray[27];
    } else if (id === "4By4Box29") {
      return mainArray[28];
    } else if (id === "4By4Box30") {
      return mainArray[29];
    } else if (id === "4By4Box31") {
      return mainArray[30];
    } else if (id === "4By4Box32") {
      return mainArray[31];
    } else if (id === "4By4Box33") {
      return mainArray[32];
    } else if (id === "4By4Box34") {
      return mainArray[33];
    } else if (id === "4By4Box35") {
      return mainArray[34];
    } else if (id === "4By4Box36") {
      return mainArray[35];
    } else {
      return false;
    }
  }

  function closeIsOpen(id) {
    if (id === "4By4Box1") {
      return setisOpenBox1(false);
    } else if (id === "4By4Box2") {
      return setisOpenBox2(false);
    } else if (id === "4By4Box3") {
      return setisOpenBox3(false);
    } else if (id === "4By4Box4") {
      return setisOpenBox4(false);
    } else if (id === "4By4Box5") {
      return setisOpenBox5(false);
    } else if (id === "4By4Box6") {
      return setisOpenBox6(false);
    } else if (id === "4By4Box7") {
      return setisOpenBox7(false);
    } else if (id === "4By4Box8") {
      return setisOpenBox8(false);
    } else if (id === "4By4Box9") {
      return setisOpenBox9(false);
    } else if (id === "4By4Box10") {
      return setisOpenBox10(false);
    } else if (id === "4By4Box11") {
      return setisOpenBox11(false);
    } else if (id === "4By4Box12") {
      return setisOpenBox12(false);
    } else if (id === "4By4Box13") {
      return setisOpenBox13(false);
    } else if (id === "4By4Box14") {
      return setisOpenBox14(false);
    } else if (id === "4By4Box15") {
      return setisOpenBox15(false);
    } else if (id === "4By4Box16") {
      return setisOpenBox16(false);
    } else if (id === "4By4Box17") {
      return setisOpenBox17(false);
    } else if (id === "4By4Box18") {
      return setisOpenBox18(false);
    } else if (id === "4By4Box19") {
      return setisOpenBox19(false);
    } else if (id === "4By4Box20") {
      return setisOpenBox20(false);
    } else if (id === "4By4Box21") {
      return setisOpenBox21(false);
    } else if (id === "4By4Box22") {
      return setisOpenBox22(false);
    } else if (id === "4By4Box23") {
      return setisOpenBox23(false);
    } else if (id === "4By4Box24") {
      return setisOpenBox24(false);
    } else if (id === "4By4Box25") {
      return setisOpenBox25(false);
    } else if (id === "4By4Box26") {
      return setisOpenBox26(false);
    } else if (id === "4By4Box27") {
      return setisOpenBox27(false);
    } else if (id === "4By4Box28") {
      return setisOpenBox28(false);
    } else if (id === "4By4Box29") {
      return setisOpenBox29(false);
    } else if (id === "4By4Box30") {
      return setisOpenBox30(false);
    } else if (id === "4By4Box31") {
      return setisOpenBox31(false);
    } else if (id === "4By4Box32") {
      return setisOpenBox32(false);
    } else if (id === "4By4Box33") {
      return setisOpenBox33(false);
    } else if (id === "4By4Box34") {
      return setisOpenBox34(false);
    } else if (id === "4By4Box35") {
      return setisOpenBox35(false);
    } else if (id === "4By4Box36") {
      return setisOpenBox36(false);
    } else {
      return false;
    }
  }

  let [loading, setLoading] = useState(false);
  const PlayGame = (e) => {
    if (loading === true) return;
    if (TotalTime < 1) return;
    if (AreadyOpenedArray.includes(e.target.id)) return;
    if (e.target.id === FirstChoosenItem) return;
    let selectedBox = e.target.id;
    if (FirstChoosenItem === "") {
      setFirstChoosenItem(selectedBox);
      if (selectedBox === "4By4Box1") {
        setisOpenBox1(true);
      } else if (selectedBox === "4By4Box2") {
        setisOpenBox2(true);
      } else if (selectedBox === "4By4Box3") {
        setisOpenBox3(true);
      } else if (selectedBox === "4By4Box4") {
        setisOpenBox4(true);
      } else if (selectedBox === "4By4Box5") {
        setisOpenBox5(true);
      } else if (selectedBox === "4By4Box6") {
        setisOpenBox6(true);
      } else if (selectedBox === "4By4Box7") {
        setisOpenBox7(true);
      } else if (selectedBox === "4By4Box8") {
        setisOpenBox8(true);
      } else if (selectedBox === "4By4Box9") {
        setisOpenBox9(true);
      } else if (selectedBox === "4By4Box10") {
        setisOpenBox10(true);
      } else if (selectedBox === "4By4Box11") {
        setisOpenBox11(true);
      } else if (selectedBox === "4By4Box12") {
        setisOpenBox12(true);
      } else if (selectedBox === "4By4Box13") {
        setisOpenBox13(true);
      } else if (selectedBox === "4By4Box14") {
        setisOpenBox14(true);
      } else if (selectedBox === "4By4Box15") {
        setisOpenBox15(true);
      } else if (selectedBox === "4By4Box16") {
        setisOpenBox16(true);
      } else if (selectedBox === "4By4Box17") {
        setisOpenBox17(true);
      } else if (selectedBox === "4By4Box18") {
        setisOpenBox18(true);
      } else if (selectedBox === "4By4Box19") {
        setisOpenBox19(true);
      } else if (selectedBox === "4By4Box20") {
        setisOpenBox20(true);
      } else if (selectedBox === "4By4Box21") {
        setisOpenBox21(true);
      } else if (selectedBox === "4By4Box22") {
        setisOpenBox22(true);
      } else if (selectedBox === "4By4Box23") {
        setisOpenBox23(true);
      } else if (selectedBox === "4By4Box24") {
        setisOpenBox24(true);
      } else if (selectedBox === "4By4Box25") {
        setisOpenBox25(true);
      } else if (selectedBox === "4By4Box26") {
        setisOpenBox26(true);
      } else if (selectedBox === "4By4Box27") {
        setisOpenBox27(true);
      } else if (selectedBox === "4By4Box28") {
        setisOpenBox28(true);
      } else if (selectedBox === "4By4Box29") {
        setisOpenBox29(true);
      } else if (selectedBox === "4By4Box30") {
        setisOpenBox30(true);
      } else if (selectedBox === "4By4Box31") {
        setisOpenBox31(true);
      } else if (selectedBox === "4By4Box32") {
        setisOpenBox32(true);
      } else if (selectedBox === "4By4Box33") {
        setisOpenBox33(true);
      } else if (selectedBox === "4By4Box34") {
        setisOpenBox34(true);
      } else if (selectedBox === "4By4Box35") {
        setisOpenBox35(true);
      } else if (selectedBox === "4By4Box36") {
        setisOpenBox36(true);
      } else {
        return false;
      }
      return;
    } else {
      setSecondChoosenItem(selectedBox);
      if (selectedBox === "4By4Box1") {
        setisOpenBox1(true);
      } else if (selectedBox === "4By4Box2") {
        setisOpenBox2(true);
      } else if (selectedBox === "4By4Box3") {
        setisOpenBox3(true);
      } else if (selectedBox === "4By4Box4") {
        setisOpenBox4(true);
      } else if (selectedBox === "4By4Box5") {
        setisOpenBox5(true);
      } else if (selectedBox === "4By4Box6") {
        setisOpenBox6(true);
      } else if (selectedBox === "4By4Box7") {
        setisOpenBox7(true);
      } else if (selectedBox === "4By4Box8") {
        setisOpenBox8(true);
      } else if (selectedBox === "4By4Box9") {
        setisOpenBox9(true);
      } else if (selectedBox === "4By4Box10") {
        setisOpenBox10(true);
      } else if (selectedBox === "4By4Box11") {
        setisOpenBox11(true);
      } else if (selectedBox === "4By4Box12") {
        setisOpenBox12(true);
      } else if (selectedBox === "4By4Box13") {
        setisOpenBox13(true);
      } else if (selectedBox === "4By4Box14") {
        setisOpenBox14(true);
      } else if (selectedBox === "4By4Box15") {
        setisOpenBox15(true);
      } else if (selectedBox === "4By4Box16") {
        setisOpenBox16(true);
      } else if (selectedBox === "4By4Box18") {
        setisOpenBox18(true);
      } else if (selectedBox === "4By4Box19") {
        setisOpenBox19(true);
      } else if (selectedBox === "4By4Box20") {
        setisOpenBox20(true);
      } else if (selectedBox === "4By4Box21") {
        setisOpenBox21(true);
      } else if (selectedBox === "4By4Box22") {
        setisOpenBox22(true);
      } else if (selectedBox === "4By4Box23") {
        setisOpenBox23(true);
      } else if (selectedBox === "4By4Box24") {
        setisOpenBox24(true);
      } else if (selectedBox === "4By4Box25") {
        setisOpenBox25(true);
      } else if (selectedBox === "4By4Box26") {
        setisOpenBox26(true);
      } else if (selectedBox === "4By4Box27") {
        setisOpenBox27(true);
      } else if (selectedBox === "4By4Box28") {
        setisOpenBox28(true);
      } else if (selectedBox === "4By4Box29") {
        setisOpenBox29(true);
      } else if (selectedBox === "4By4Box30") {
        setisOpenBox30(true);
      } else if (selectedBox === "4By4Box31") {
        setisOpenBox31(true);
      } else if (selectedBox === "4By4Box32") {
        setisOpenBox32(true);
      } else if (selectedBox === "4By4Box33") {
        setisOpenBox33(true);
      } else if (selectedBox === "4By4Box34") {
        setisOpenBox34(true);
      } else if (selectedBox === "4By4Box35") {
        setisOpenBox35(true);
      } else if (selectedBox === "4By4Box36") {
        setisOpenBox36(true);
      } else {
        return false;
      }
      setLoading(true);
      return;
    }
  };

  let [TotalTime, setTotalTime] = useState(() => {
    if (currectGameInfo.gridSize === "4by4") {
      return 50;
    } else {
      return 700;
    }
  });
  let [timeLeft, settimeLeft] = useState();
  let [secondTimeLeft, setsecondTimeLeft] = useState();
  let [numberOfMoves, setnumberOfMoves] = useState(0);

  let [whichPlayerWon, setwhichPlayerWon] = useState(0);

  let [singleplayerResult, setsingleplayerResult] = useState(0);

  let isgameEnded = false;

  function calculateScore() {
    if (By4 && AreadyOpenedArray.length < 8) {
      setgameWon(false);
    } else if (By4 && AreadyOpenedArray.length >= 8) {
      setgameWon(true);
    } else if (!By4 && AreadyOpenedArray.length < 16) {
      setgameWon(false);
    } else {
      setgameWon(true);
    }
    let a = AreadyOpenedArray.length * 2;
    let b = numberOfMoves * 1.5;
    return a + TotalTime - b + 1;
  }

  function endGame() {
    settimeSpent(secondTimeLeft);
    if (AreadyOpenedArray.length > 13 && By4) {
      let score = calculateScore();
      gameEnded(secondTimeLeft, score);
      clearInterval(myinterval)
      setTimeout(() => {
        navigate("/result");
      }, 1500);
    }
    if (AreadyOpenedArray.length > 33 && By6) {
      console.log("gameEnded");
      let score = calculateScore();
      gameEnded(secondTimeLeft, score);
      clearInterval(myinterval)
      setTimeout(() => {
        navigate("/result");
      }, 1500);
    }
    if (TotalTime <= 0 && !isgameEnded) {
        setTimeout(() => {
        navigate("/result");
        clearInterval(myinterval)
      }, 1500);
      let score = calculateScore();
      gameEnded(secondTimeLeft, score);
      isgameEnded = true;
    }
  }

  useEffect(() => {
    let myTimeout;
    if (SecondChoosenItem === "") return;
    if (
      convertIdToValue(FirstChoosenItem) === convertIdToValue(SecondChoosenItem)
    ) {
      settingIsAccepted(FirstChoosenItem);
      settingIsAccepted(SecondChoosenItem);
      setAreadyOpenedArray((prev) => [
        ...prev,
        FirstChoosenItem,
        SecondChoosenItem,
      ]);
      setFirstChoosenItem("");
      setSecondChoosenItem("");
      setLoading(false);
      checkPlayer();
      changeScore(currentPlayer);
      setnumberOfAttempts((prev) => prev + 1);
      setnumberOfMoves((prev) => prev + 1);
      setsingleplayerResult(calculateScore());
      setsinglePlayerScore(singleplayerResult);
      endGame();
    } else {
      myTimeout = setTimeout(function () {
        closeIsOpen(FirstChoosenItem);
        closeIsOpen(SecondChoosenItem);
        setFirstChoosenItem("");
        setSecondChoosenItem("");
        setLoading(false);
        checkPlayer();
        setnumberOfAttempts((prev) => prev + 1);
        setnumberOfMoves((prev) => prev + 1);
        setsingleplayerResult(calculateScore());
        setsinglePlayerScore(singleplayerResult);
      }, 1000);
    }

    return () => {
      clearTimeout(myTimeout);
    };
  }, [SecondChoosenItem]);

  let myinterval
  useEffect(() => {
      myinterval = setInterval(function () {
      if (TotalTime < 0) {
        clearInterval(myinterval);
        endGame();
        return;
      }
      if (gameOver) {
        clearInterval(myinterval);
        return;
      }
      setTotalTime((prev) => prev - 1);
      let seconds = Math.floor(TotalTime % 60);
      let minutes = Math.floor((TotalTime / 60) % 60);
      let displayTime;
      setsecondTimeLeft(() => {
        if (By4) {
          return 51 - TotalTime;
        } else {
          return 701 - TotalTime;
        }
      });
      if (seconds < 10) {
        displayTime = `${minutes}:0${seconds}`;
      } else {
        displayTime = `${minutes}:${seconds}`;
      }

      settimeLeft(displayTime);
    }, 1000);
    return () => {
      clearInterval(myinterval);
    };
  }, [TotalTime]);

  return (
    <div id="playGameContainer">
      <section id="playGameHeader">
        <div id="playGameHeaderInner">
          <h3 id="playGameType">
            {" "}
            {currectGameInfo.numberOfPlayers > 1
              ? "Multiplayer"
              : "Single player"}{" "}
          </h3>
          <div id="playGameTimer">{timeLeft}</div>
        </div>
        <img src={menuIcon} alt="" onClick={() => setmenuOpen(true)} />
      </section>
      {playerNumber > 1 && (
        <section id="PlayerInfoSection">
          <div id="playPageDisplayScoreDiv">
            {Array(parseInt(playerNumber))
              .fill(2)
              .map((item, index) => {
                return (
                  <div className="playPageDisplayScores" key={index}>
                    PLAYER {index + 1}{" "}
                    <div className="showScore">
                      {playersScores[index].score}
                    </div>
                  </div>
                );
              })}
          </div>
          <div id="playPageDisplayTurn">
            {gameOver ? "Game Over" : `Player${currentPlayer}`}{" "}
          </div>
        </section>
      )}
      <div
        id="gridContainer"
        style={{
          gridTemplateColumns: By6 ? "repeat(6, 1fr)" : "repeat(4, 1fr)",
        }}
      >
        <div
          style={{
            backgroundColor:
              isOpenBox1 && !isAcceptedBox1
                ? "grey"
                : isAcceptedBox1
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box1"
        >
          {isOpenBox1 ? mainArray[0] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox2 && !isAcceptedBox2
                ? "grey"
                : isAcceptedBox2
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box2"
        >
          {isOpenBox2 ? mainArray[1] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox3 && !isAcceptedBox3
                ? "grey"
                : isAcceptedBox3
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box3"
        >
          {isOpenBox3 ? mainArray[2] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox4 && !isAcceptedBox4
                ? "grey"
                : isAcceptedBox4
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box4"
        >
          {isOpenBox4 ? mainArray[3] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox5 && !isAcceptedBox5
                ? "grey"
                : isAcceptedBox5
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box5"
        >
          {isOpenBox5 ? mainArray[4] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox6 && !isAcceptedBox6
                ? "grey"
                : isAcceptedBox6
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box6"
        >
          {isOpenBox6 ? mainArray[5] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox7 && !isAcceptedBox7
                ? "grey"
                : isAcceptedBox7
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box7"
        >
          {isOpenBox7 ? mainArray[6] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox8 && !isAcceptedBox8
                ? "grey"
                : isAcceptedBox8
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box8"
        >
          {isOpenBox8 ? mainArray[7] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox9 && !isAcceptedBox9
                ? "grey"
                : isAcceptedBox9
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box9"
        >
          {isOpenBox9 ? mainArray[8] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox10 && !isAcceptedBox10
                ? "grey"
                : isAcceptedBox10
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box10"
        >
          {isOpenBox10 ? mainArray[9] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox11 && !isAcceptedBox11
                ? "grey"
                : isAcceptedBox11
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box11"
        >
          {isOpenBox11 ? mainArray[10] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox12 && !isAcceptedBox12
                ? "grey"
                : isAcceptedBox12
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box12"
        >
          {isOpenBox12 ? mainArray[11] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox13 && !isAcceptedBox13
                ? "grey"
                : isAcceptedBox13
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box13"
        >
          {isOpenBox13 ? mainArray[12] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox14 && !isAcceptedBox14
                ? "grey"
                : isAcceptedBox14
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box14"
        >
          {isOpenBox14 ? mainArray[13] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox15 && !isAcceptedBox15
                ? "grey"
                : isAcceptedBox15
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box15"
        >
          {isOpenBox15 ? mainArray[14] : ""}
        </div>
        <div
          style={{
            backgroundColor:
              isOpenBox16 && !isAcceptedBox16
                ? "grey"
                : isAcceptedBox16
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            PlayGame(e);
          }}
          className="gridContainerItems"
          id="4By4Box16"
        >
          {isOpenBox16 ? mainArray[15] : ""}
        </div>
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox17 && !isAcceptedBox17
                  ? "grey"
                  : isAcceptedBox17
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box17"
          >
            {isOpenBox17 ? mainArray[16] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox18 && !isAcceptedBox18
                  ? "grey"
                  : isAcceptedBox18
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box18"
          >
            {isOpenBox18 ? mainArray[17] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox19 && !isAcceptedBox19
                  ? "grey"
                  : isAcceptedBox19
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box19"
          >
            {isOpenBox19 ? mainArray[18] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox20 && !isAcceptedBox20
                  ? "grey"
                  : isAcceptedBox20
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box20"
          >
            {isOpenBox20 ? mainArray[19] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox21 && !isAcceptedBox21
                  ? "grey"
                  : isAcceptedBox21
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box21"
          >
            {isOpenBox21 ? mainArray[20] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox22 && !isAcceptedBox22
                  ? "grey"
                  : isAcceptedBox22
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box22"
          >
            {isOpenBox22 ? mainArray[21] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox23 && !isAcceptedBox23
                  ? "grey"
                  : isAcceptedBox23
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box23"
          >
            {isOpenBox23 ? mainArray[22] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox24 && !isAcceptedBox24
                  ? "grey"
                  : isAcceptedBox24
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box24"
          >
            {isOpenBox24 ? mainArray[23] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox25 && !isAcceptedBox25
                  ? "grey"
                  : isAcceptedBox25
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box25"
          >
            {isOpenBox25 ? mainArray[24] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox26 && !isAcceptedBox26
                  ? "grey"
                  : isAcceptedBox26
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box26"
          >
            {isOpenBox26 ? mainArray[25] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox27 && !isAcceptedBox27
                  ? "grey"
                  : isAcceptedBox27
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box27"
          >
            {isOpenBox27 ? mainArray[26] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox28 && !isAcceptedBox28
                  ? "grey"
                  : isAcceptedBox28
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box28"
          >
            {isOpenBox28 ? mainArray[27] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox29 && !isAcceptedBox29
                  ? "grey"
                  : isAcceptedBox29
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box29"
          >
            {isOpenBox29 ? mainArray[28] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox30 && !isAcceptedBox30
                  ? "grey"
                  : isAcceptedBox30
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box30"
          >
            {isOpenBox30 ? mainArray[29] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox31 && !isAcceptedBox31
                  ? "grey"
                  : isAcceptedBox31
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box31"
          >
            {isOpenBox31 ? mainArray[30] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox32 && !isAcceptedBox32
                  ? "grey"
                  : isAcceptedBox32
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box32"
          >
            {isOpenBox32 ? mainArray[31] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox33 && !isAcceptedBox33
                  ? "grey"
                  : isAcceptedBox33
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box33"
          >
            {isOpenBox33 ? mainArray[32] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox34 && !isAcceptedBox34
                  ? "grey"
                  : isAcceptedBox34
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box34"
          >
            {isOpenBox34 ? mainArray[33] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox35 && !isAcceptedBox35
                  ? "grey"
                  : isAcceptedBox35
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box35"
          >
            {isOpenBox35 ? mainArray[34] : ""}
          </div>
        )}
        {By6 && (
          <div
            style={{
              backgroundColor:
                isOpenBox36 && !isAcceptedBox36
                  ? "grey"
                  : isAcceptedBox36
                  ? "green"
                  : "red",
            }}
            onClick={(e) => {
              PlayGame(e);
            }}
            className="gridContainerItems"
            id="4By4Box36"
          >
            {isOpenBox36 ? mainArray[35] : ""}
          </div>
        )}
      </div>
      <section id="endGameBtnDiv">
        <button id="endGameBtn">Forfeit </button>
      </section>
    </div>
  );
}

export default Play;
