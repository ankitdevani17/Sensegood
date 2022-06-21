import React from 'react';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import VerifyReg from './Components/VerifyReg';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Country from './Components/Country';
import Logout from './Components/Logout';
import Billing from './Components/Billing';
import Shipping from './Components/Shipping';
import Checkout from './Components/Checkout';
import Razorpay from './Components/Razorpay';
import { Route,Routes } from "react-router-dom";
import axios from 'axios';
const App = () => {
  axios.defaults.xsrfHeaderName = "X-CSRFToken"
  axios.defaults.xsrfCookieName = 'csrftoken'
return(
    <Routes>
    <Route  path="/login" element ={<Login/>}/>
    <Route  path="/Signup" element ={<Signup/>}></Route>
    <Route  path="/VerifyReg" element ={<VerifyReg/>}></Route>
    <Route  exact path="/Products" element ={<Products/>}></Route>
    <Route  path="/Country" element ={<Country/>}></Route>
    <Route  path="/Logout" element ={<Logout/>}></Route>
    <Route path ='/Billing' element ={<Billing/>}></Route>
    <Route path ='/Shipping' element ={<Shipping/>}></Route>
    <Route path ='/Checkout' element ={<Checkout/>}></Route>
    <Route path ='/Razorpay' element ={<Razorpay/>}></Route>
  </Routes>

)}

export default App