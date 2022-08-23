import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         onAuthStateChanged,
         updateProfile,
         signOut
        }
        from "firebase/auth"
import { auth } from "../Firebase/FirebaseHosting";

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

    function CreateNewUser(email, password){
        return createUserWithEmailAndPassword(auth, email,  password)
        .then(setIsLoggedIn(true))
    }
    function signInExistingUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
        .then(setIsLoggedIn(true))
    }

    function updatingUserProfile(name){
        updateProfile(auth.currentUser,{
            
            displayName: name
        })
    }

    let [username, setUsername] = useState("Anonymous")
    console.log(username);
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setUsername(user.displayName);
          // ...
        } else {
        }
    })

    const logOut = () => {
        signOut(auth).then(() => {
            console.log("logOut")
            setIsLoggedIn(false);
        })
        .catch(err => console.log(err));
    }

    return(
        <AuthContext.Provider value={{CreateNewUser, signInExistingUser, onAuthStateChanged, setDisplayName,setUserEmail,updatingUserProfile,username,logOut,isLoggedIn,setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;