import React, { useState } from "react";
import "./global.css";
import Header from './components/Header/index';
import Descriptions from './components/Descriptions/index';
import Products from './components/Products/index';
import Down from './components/Down/index';
import Brand from './components/Brand/index';
import Routes from '../src/routes';
import Main from './pages/Main.js';
import { BrowserRouter } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>

      <Routes />

    
    </BrowserRouter>


  )

}

export default App;
