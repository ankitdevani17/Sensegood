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
import AfterSignup from './Components/AfterSignup';
import Contactus from './Components/Contactus';
import Support from './Components/Support';
import Aboutus from './Components/Aboutus';
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
    <Route exact path ='/Shipping' element ={<Shipping/>}></Route>
    <Route path ='/Checkout' element ={<Checkout/>}></Route>
    <Route path ='/Razorpay' element ={<Razorpay/>}></Route>
    <Route path ='/AfterSignup' element ={<AfterSignup/>}></Route>
    <Route path ='/Contactus' element ={<Contactus/>}></Route>
    <Route path ='/Support' element ={<Support/>}></Route>
    <Route path ='/Aboutus' element ={<Aboutus/>}></Route>
  </Routes>

)}

export default App