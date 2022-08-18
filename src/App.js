import React from "react";
import "./All.css"
import Navigation from "./Navigation";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./Home/HomePage";
import Settings from "./Settings/Settings";
import Play from "./PlayGame/Play";

function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/startgame" element={<Play/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
