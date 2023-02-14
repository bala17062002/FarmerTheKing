
import './App.css';
import React from 'react';
import { ReactDOM } from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Hpage from './Screens/Hpage';
import Home from "./Screens/Home";
import Soiltestlogin from './Screens/Soiltestlogin';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} >
             <Route path="Home" element={<Hpage/>}></Route>
        </Route>
        <Route path='/soiltest' element={<Soiltestlogin/>}/>
      </Routes>
   </BrowserRouter>
  );
}


export default App;
