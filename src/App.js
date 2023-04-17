import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import GetPage from './pages/GetPage';
import DirectRadiation from "./pages/DirectRadiation";
import IndirectRadiation from "./pages/IndirectRadiation";
import Temperature from "./pages/Temperature";
import Country from "./pages/Country";

function App() {
  return (
      //<BrowserRouter>
      <div>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/GetPage" element={<GetPage/>}/>
            <Route path='/DirectRadiation' element={<DirectRadiation/>}/>
            <Route path="/IndirectRadiation" element={<IndirectRadiation/>}/>
            <Route path="/Temperature" element={<Temperature/>}/>
              <Route path="/Country" element={<Country/>}/>
          </Routes>
        </div>
      </div>

      //</BrowserRouter>
  );
}

export default App;
