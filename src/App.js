import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//import MainSection from "./components/MainSection/MainSection";
import Routing from "./Routing";


const App = () => {
  return (
    <div className="app">
     <Navbar/>
     
     <Routing/>  
    </div>
  );
};

export default App;
