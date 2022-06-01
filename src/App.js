import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import House from "./components/HousePage/House";
import HouseAbout from "./components/HouseAbout/HouseAbout";
import Login from './components/Login/Login';



function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/house' element={<House />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
