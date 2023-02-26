import { Outlet, Navigate } from "react-router-dom";
import { auth } from "./Firebase/FirebaseHosting";
import { AuthContext } from "./context/AuthenticationContext";
import { useContext } from 'react'


function PrivateRoutes() {

    const { isLoading } = useContext(AuthContext);

    if(isLoading){return null}
  return (
    auth.currentUser ? <Outlet/> : <Navigate to="/signin"/>
  )
}

export default PrivateRoutes