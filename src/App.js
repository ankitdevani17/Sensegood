import React from 'react';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import VerifyReg from './Components/VerifyReg';
import { Route,Routes } from "react-router-dom";
const App = () => {
return(
    <Routes>
    <Route  path="/login" element ={<Login/>}/>
    <Route  path="/Signup" element ={<Signup/>}></Route>
    <Route  path="/VerifyReg" element ={<VerifyReg/>}></Route>
  </Routes>

)}

export default App