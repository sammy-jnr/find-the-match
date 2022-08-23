import React from "react";
import "./All.css"
import Navigation from "./Navigation";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./Home/HomePage";
import Settings from "./Settings/Settings";
import Play from "./PlayGame/Play";
import Result from "./PlayGame/Result";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignUp/SignIn";
import ForgotPassword from "./SignUp/ForgotPassword";
import ProfilePage from "./Profile/ProfilePage";

function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/startgame" element={<Play/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/resetPassword" element={<ForgotPassword/>}/>
          <Route path="/profilepage" element={<ProfilePage/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
