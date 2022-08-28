import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         onAuthStateChanged,
         updateProfile,
         signOut,
        }
        from "firebase/auth"
import { auth } from "../Firebase/FirebaseHosting";
import { db } from "../Firebase/FirebaseHosting";
import { setDoc, doc, updateDoc, arrayUnion, getDoc, increment, onSnapshot } from "firebase/firestore"
import { async } from "@firebase/util";

export const AuthContext = createContext()



export function AuthProvider({children}) {

    
    let [displayName, setDisplayName] = useState()
    let [userEmail, setUserEmail] = useState()

    let [isLoggedIn, setIsLoggedIn] = useState()

    const user = auth.currentUser;
    
    useEffect(() => {
        if (user){
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
    },[user])


    let [username, setusername] = useState();
    let userUid ;



    onAuthStateChanged(auth, (user) => {
        if (user) {
            setusername(user.displayName)
            userUid = auth.currentUser.uid
            setIsLoggedIn(true);
        } else {}
    })


    async function CreateNewUser(email, password){
        return await createUserWithEmailAndPassword (auth, email,  password)
        .then(()=>{
            if (auth.currentUser) {
                updatingUserProfile(displayName)
                addUserToDatabase()
                setIsLoggedIn(true)
            } else {
                console.log("something went wrong")
            }
        })
    }


    async function signInExistingUser(email, password) {
        return await signInWithEmailAndPassword(auth, email, password)
        .then(()=>setIsLoggedIn(true))
        .then(()=>setusername(auth.currentUser.displayName))
        
    }

    
    function updatingUserProfile(name){
        updateProfile(auth.currentUser,{
            displayName: name
        }).then(()=>{
            setusername(auth.currentUser.displayName)
        })
    }

    
    
    

    const logOut = () => {
        signOut(auth).then(() => {
            console.log("logOut")
            setIsLoggedIn(false);
        })
        .catch(err => console.log(err));
    }
    // uploading info

    

    
    

    const addUserToDatabase = async() => {
        await setDoc(doc(db, "users", `${userUid}`), {
            TotalGamesPlayed: 0,
            TotalGamesWon: 0,
            TotalGamesLost: 0,
        }).then(() => {
            try {
                setDoc(doc(db, `users/${userUid}/scores`, "4by4"), {
                    scoreInfo: arrayUnion(),
                    AverageScore:0,
                    AverageTime: 0,
                    HighestScore:0,
                    FastestTime: 0,
                    ToTalGames: 0
                })
                setDoc(doc(db, `users/${userUid}/scores`, "6by6"), {
                    scoreInfo: arrayUnion(),
                    AverageScore:0,
                    AverageTime: 0,
                    HighestScore:0,
                    FastestTime: 0,
                    ToTalGames: 0
                })
                console.log("done")
            } catch (error) {
                console.log(error.message)
            }
            
        }).catch(err => console.log(err));
    }

    let [TotalGamesPlayed4by4, setTotalGamesPlayed4by4] = useState(0)
    let [AverageTime4by4, setAverageTime4by4] = useState(0)
    let [AverageScore4by4, setAverageScore4by4] = useState(0)
    let [HighestScore4by4, setHighestScore4by4] = useState(0)
    let [ScoresArray4by4, setScoresArray4by4] = useState(0)
    let [FastestTime4by4, setFastestTime4by4] = useState(0)

    let [TotalGamesPlayed6by6, setTotalGamesPlayed6by6] = useState(0)
    let [AverageTime6by6, setAverageTime6by6] = useState(0)
    let [AverageScore6by6, setAverageScore6by6] = useState(0)
    let [HighestScore6by6, setHighestScore6by6] = useState(0)
    let [ScoresArray6by6, setScoresArray6by6] = useState(0)
    let [FastestTime6by6, setFastestTime6by6] = useState(0)










    





    let userScore;
    let timeSpent;
    let date = new Date().toLocaleString();


    let [TotalGamesPlayed, setTotalGamesPlayed] = useState(0)
    let [TotalGamesWon, setTotalGamesWon] = useState(0)
    let [TotalGamesLost, setTotalGamesLost] = useState(0)

    let [gameWon, setgameWon] = useState(true)
    let [modeIs4by4, setmodeIs4by4] = useState(true)

    function gameEnded(timeleft, score) {
        userScore = score;
        timeSpent = timeleft
        if (score <= 0){
            setgameWon(false)
        }else{
            setgameWon(true)
        }
        onGameEnd()
    }


    
    const onGameEnd = async() => {
        if(!user)return;
        if (auth.currentUser){
            console.log(userUid)
            if(modeIs4by4){
                let tempTotalGamesPlayed;

                let tempaverageTime;
                let tempaverageScore;
                let temphighestScore;
                let tempfastestTime;
                let tempTotalGames4By4;

                let newTempaverageTime;
                let newTempaverageScore;
                let newTemphighestScore;
                let newtempfastestTime;
                let newtempTotalGames4By4;

                await updateDoc(doc(db, `users/${userUid}/scores`, "4by4"), {
                    scoreInfo: arrayUnion({
                        date: date,
                        score: userScore,
                        timeSpent: timeSpent,
                    }),
                    
                })
                .then(async()=>{
                    await getDoc(doc(db, `users/${userUid}`))
                    .then((response)=>{
                        console.log(response.data())
                        tempTotalGamesPlayed = response.data().TotalGamesPlayed
                    })
                })
                .then(async()=>{
                    await getDoc(doc(db, `users/${userUid}/scores`, "4by4"))
                    .then((response)=>{
                        const returnedData = response.data()
                        console.log(returnedData);
                        tempaverageTime = returnedData.AverageTime
                        tempaverageScore = returnedData.AverageScore
                        temphighestScore = returnedData.HighestScore
                        tempfastestTime = returnedData.FastestTime
                        tempTotalGames4By4 = returnedData.TotalGames

                        if (tempTotalGamesPlayed === 0){
                            newTempaverageTime = timeSpent
                            newTempaverageScore = userScore
                        }
                        if(tempTotalGamesPlayed > 0){
                            let a1 = tempaverageTime*tempTotalGamesPlayed  +  timeSpent
                            let b1 =  tempTotalGamesPlayed + 1
                            newTempaverageTime = a1/b1
                            
                            let a2 = tempaverageScore*tempTotalGamesPlayed  +  userScore
                            let b2 = tempTotalGamesPlayed + 1
                            newTempaverageScore = a2/b2
                        }
                        
                        if(temphighestScore < userScore){
                            newTemphighestScore = userScore
                        }else{ newTemphighestScore = temphighestScore}

                        newtempTotalGames4By4 = tempTotalGames4By4 + 1;
                        
                        if(timeSpent < tempfastestTime){
                            newtempfastestTime = timeSpent
                        }else{ newtempfastestTime = tempfastestTime}

                    })
                }).catch((err) => console.log(err.message))
                .then(async()=>{
                    if(gameWon){
                        await updateDoc(doc(db, "users", `${userUid}`),{
                            TotalGamesPlayed: increment(1),
                            TotalGamesWon: increment(1)
                        }
                    )}else{
                        await updateDoc(doc(db,"users", `${userUid}`),{
                            TotalGamesPlayed: increment(1),
                            TotalGamesLost: increment(1)
                        }
                    )}
                    console.log("done")
                }).catch((err) => console.log(err.message))
                .then(async()=>{
                    await updateDoc(doc(db, `users/${userUid}/scores`, "4by4"),{
                        AverageScore: newTempaverageScore,
                        AverageTime: newTempaverageTime,
                        HighestScore: newTemphighestScore,
                        FastestTime: newtempfastestTime,
                        TotalGames: newtempTotalGames4By4
                    })
                }).catch((err) => console.log(err.message))
            }else{
                let tempTotalGamesPlayed;
                let tempaverageTime;
                let tempaverageScore;
                let temphighestScore;
                let tempfastestTime;
                let tempTotalGames6By6;

                let newTempaverageTime;
                let newTempaverageScore;
                let newTemphighestScore;
                let newtempfastestTime;
                let newtempTotalGames6By6;
                await updateDoc(doc(db, `users/${userUid}/scores`, "6by6"), {
                    scoreInfo: arrayUnion({
                        date: date,
                        score: userScore,
                        timeSpent: timeSpent,
                    }),
                    
                })
                .then(async()=>{
                    await getDoc(doc(db, `users/${userUid}`))
                    .then((response)=>{
                        tempTotalGamesPlayed = response.data().TotalGamesPlayed})})
                .then(async()=>{
                    await getDoc(doc(db, `users/${userUid}/scores`, "6by6"))
                    .then((response)=>{
                        const returnedData = response.data()
                        tempaverageTime = returnedData.AverageTime
                        tempaverageScore = returnedData.AverageScore
                        temphighestScore = returnedData.HighestScore
                        tempfastestTime = returnedData.FastestTime
                        tempTotalGames6By6 = returnedData.TotalGames

                        let a1 = tempaverageTime*tempTotalGamesPlayed  +  timeSpent
                        newTempaverageTime = a1/ tempTotalGamesPlayed+1

                        let a2 = tempaverageScore*tempTotalGamesPlayed  +  userScore
                        newTempaverageScore = a2/ tempTotalGamesPlayed+1

                        if(temphighestScore < userScore){
                            newTemphighestScore = userScore
                        }else{ newTemphighestScore = temphighestScore}

                        newtempTotalGames6By6 = tempTotalGames6By6 + 1;
                        
                        if(timeSpent < tempfastestTime){
                            newtempfastestTime = timeSpent
                        }else{ newtempfastestTime = tempfastestTime}

                    })
                }).catch((err) => console.log(err.message))
                .then(async()=>{
                    if(gameWon){
                        await updateDoc(doc(db, "users", `${userUid}`),{
                            TotalGamesPlayed: increment(1),
                            TotalGamesWon: increment(1)
                        }
                    )}else{
                        await updateDoc(doc(db,"users", `${userUid}`),{
                            TotalGamesPlayed: increment(1),
                            TotalGamesLost: increment(1)
                        }
                    )}
                    console.log("done")
                }).catch((err) => console.log(err.message))
                .then(async()=>{
                    await updateDoc(doc(db, `users/${userUid}/scores`, "6by6"),{
                        AverageScore: newTempaverageScore,
                        AverageTime: newTempaverageTime,
                        HighestScore: newTemphighestScore,
                        FastestTime: newtempfastestTime,
                        TotalGames: newtempTotalGames6By6
                    })
                }).catch((err) => console.log(err.message))
            }
             //updating docs after every game
             getDoc(doc(db, `users/${userUid}/scores`, "4by4"))
             .then((response) => {
                 console.log(response.data());
                 let userBasicInfoResult = response.data();
                 setAverageTime4by4(()=>{
                     let seconds = Math.floor( (userBasicInfoResult.AverageTime) % 60 );
                     let minutes = Math.floor( (userBasicInfoResult.AverageTime/60) % 60 )  
                     let displayTime
                     if(seconds < 10){
                         displayTime = `${minutes}:0${seconds}`
                     }else{
                         displayTime = `${minutes}:${seconds}`
                     } 
                     return displayTime     

                 })
                 setAverageScore4by4(Math.floor(userBasicInfoResult.AverageScore))
                 setHighestScore4by4(userBasicInfoResult.HighestScore)
                 setScoresArray4by4(userBasicInfoResult.scoreInfo)
                 setTotalGamesPlayed4by4(userBasicInfoResult.ToTalGames)
                 setFastestTime4by4(()=>{
                    let seconds = Math.floor( (userBasicInfoResult.FastestTime) % 60 );
                    let minutes = Math.floor( (userBasicInfoResult.FastestTime/60) % 60 )  
                    let displayTime
                    if(seconds < 10){
                        displayTime = `${minutes}:0${seconds}`
                    }else{
                        displayTime = `${minutes}:${seconds}`
                    } 
                    return displayTime     

                })
             })
             getDoc(doc(db, `users/${userUid}/scores`, "6by6"))
             .then((response) => {
                 console.log(response.data());
                 let userBasicInfoResult = response.data();
                 setAverageTime6by6(()=>{
                     let seconds = Math.floor( (userBasicInfoResult.AverageTime) % 60 );
                     let minutes = Math.floor( (userBasicInfoResult.AverageTime/60) % 60 )  
                     let displayTime
                     if(seconds < 10){
                         displayTime = `${minutes}:0${seconds}`
                     }else{
                         displayTime = `${minutes}:${seconds}`
                     } 
                     return displayTime     

                 })
                 setAverageScore6by6(Math.floor(userBasicInfoResult.AverageScore))
                 setHighestScore6by6(userBasicInfoResult.HighestScore)
                 setScoresArray6by6(userBasicInfoResult.scoreInfo)
                 setFastestTime6by6(()=>{
                    let seconds = Math.floor( (userBasicInfoResult.FastestTime) % 60 );
                    let minutes = Math.floor( (userBasicInfoResult.FastestTime/60) % 60 )  
                    let displayTime
                    if(seconds < 10){
                        displayTime = `${minutes}:0${seconds}`
                    }else{
                        displayTime = `${minutes}:${seconds}`
                    } 
                    return displayTime     

                })
                 setTotalGamesPlayed6by6(userBasicInfoResult.TotalGames);
             })
             getDoc(doc(db, "users", `${userUid}`))
             .then((response) => {
                 let userBasicInfoResult = response.data();
                 setTotalGamesPlayed(userBasicInfoResult.TotalGamesPlayed)
                 setTotalGamesWon(userBasicInfoResult.TotalGamesWon)
                 setTotalGamesLost(userBasicInfoResult.TotalGamesLost)
             })                
        }else{
            console.log("user not signed in")
        }
        
    }

// getting docs on load completed
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                
                getDoc(doc(db, `users/${userUid}/scores`, "4by4"))
                .then((response) => {
                    if(!response.exists())return;
                    let userBasicInfoResult = response.data();
                    setAverageTime4by4(()=>{
                        let seconds = Math.floor( (userBasicInfoResult.AverageTime) % 60 );
                        let minutes = Math.floor( (userBasicInfoResult.AverageTime/60) % 60 )  
                        let displayTime
                        if(seconds < 10){
                            displayTime = `${minutes}:0${seconds}`
                        }else{
                            displayTime = `${minutes}:${seconds}`
                        } 
                        return displayTime     

                    })
                    setAverageScore4by4(Math.floor(userBasicInfoResult.AverageScore))
                    setHighestScore4by4(userBasicInfoResult.HighestScore)
                    setScoresArray4by4(userBasicInfoResult.scoreInfo)
                    setTotalGamesPlayed4by4(userBasicInfoResult.ToTalGames)
                    setFastestTime4by4(()=>{
                        let seconds = Math.floor( (userBasicInfoResult.FastestTime) % 60 );
                        let minutes = Math.floor( (userBasicInfoResult.FastestTime/60) % 60 )  
                        let displayTime
                        if(seconds < 10){
                            displayTime = `${minutes}:0${seconds}`
                        }else{
                            displayTime = `${minutes}:${seconds}`
                        } 
                        return displayTime     

                    })
                })
                getDoc(doc(db, `users/${userUid}/scores`, "6by6"))
                .then((response) => {
                    if(!response.exists())return;
                    let userBasicInfoResult = response.data();
                    setAverageTime6by6(()=>{
                        let seconds = Math.floor( (userBasicInfoResult.AverageTime) % 60 );
                        let minutes = Math.floor( (userBasicInfoResult.AverageTime/60) % 60 )  
                        let displayTime
                        if(seconds < 10){
                            displayTime = `${minutes}:0${seconds}`
                        }else{
                            displayTime = `${minutes}:${seconds}`
                        } 
                        return displayTime     

                    })
                    setAverageScore6by6(Math.floor(userBasicInfoResult.AverageScore))
                    setHighestScore6by6(userBasicInfoResult.HighestScore)
                    setScoresArray6by6(userBasicInfoResult.scoreInfo)
                    setFastestTime6by6(()=>{
                        let seconds = Math.floor( (userBasicInfoResult.FastestTime) % 60 );
                        let minutes = Math.floor( (userBasicInfoResult.FastestTime/60) % 60 )  
                        let displayTime
                        if(seconds < 10){
                            displayTime = `${minutes}:0${seconds}`
                        }else{
                            displayTime = `${minutes}:${seconds}`
                        } 
                        return displayTime     

                    })
                    setTotalGamesPlayed6by6(userBasicInfoResult.TotalGames);
                })
                getDoc(doc(db, "users", `${userUid}`))
                .then((response) => {
                    if(!response.exists())return;
                    let userBasicInfoResult = response.data();
                    setTotalGamesPlayed(userBasicInfoResult.TotalGamesPlayed)
                    setTotalGamesWon(userBasicInfoResult.TotalGamesWon)
                    setTotalGamesLost(userBasicInfoResult.TotalGamesLost)
                })                
            }
        })
    },[user])


  
    return(
        <AuthContext.Provider value={{CreateNewUser, signInExistingUser, onAuthStateChanged,
                                        setDisplayName,setUserEmail,updatingUserProfile,username,
                                        logOut,isLoggedIn,setIsLoggedIn,gameEnded,

                                        setmodeIs4by4,setgameWon,


                                        AverageTime4by4, AverageScore4by4, HighestScore4by4, ScoresArray4by4, AverageTime6by6, AverageScore6by6, HighestScore6by6, ScoresArray6by6,
                                        TotalGamesPlayed, TotalGamesLost, TotalGamesWon,
                                        FastestTime4by4, FastestTime6by6, TotalGamesPlayed4by4, TotalGamesPlayed6by6
                                        
                                        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;