import React from 'react';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import VerifyReg from './Components/VerifyReg';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Country from './Components/Country';
import Logout from './Components/Logout';
import { Route,Routes } from "react-router-dom";
const App = () => {
return(
    <Routes>
    <Route  path="/login" element ={<Login/>}/>
    <Route  path="/Signup" element ={<Signup/>}></Route>
    <Route  path="/VerifyReg" element ={<VerifyReg/>}></Route>
    <Route  exact path="/Products" element ={<Products/>}></Route>
    <Route  path="/Country" element ={<Country/>}></Route>
    <Route  path="/Logout" element ={<Logout/>}></Route>
  </Routes>

)}

export default App