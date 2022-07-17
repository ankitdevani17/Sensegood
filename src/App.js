import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import VerifyReg from './Components/VerifyReg';
import Products from './Components/Products';
import Country from './Components/Country';
import Logout from './Components/Logout';
import Billing from './Components/Billing';
import Shipping from './Components/Shipping';
import Checkout from './Components/Checkout';
import Razorpay from './Components/Razorpay';
import RelatedProducts from './Components/RelatedProducts';
import { Route,Routes } from "react-router-dom";
import axios from 'axios';
import AfterSignup from './Components/AfterSignup';
import Contactus from './Components/Contactus';
import Support from './Components/Support';
import Aboutus from './Components/Aboutus';
import Footer from './Components/Footer';
import Resources from './Components/Resources';
import ResourcesDisplay from './Components/ResourcesDisplay';
import Cardview from './Components/Cardview';
import Industry from './Components/Industry';
import IndustryDisplay from './Components/IndustryDisplay';
import SupportCardview from './Components/SupportCardview';
const App = () => {
  axios.defaults.xsrfHeaderName = "X-CSRFToken"
  axios.defaults.xsrfCookieName = 'csrftoken'
return(
  <>

    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route  path="/login" element ={<Login/>}/>
    <Route  path="/navbar" element ={<Navbar/>}/>
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
    <Route path ='/Support/product/:id' element ={<SupportCardview/>}></Route>
    <Route path ='/Aboutus' element ={<Aboutus/>}></Route>
    <Route path ='/Resources' element ={<Resources/>}></Route>
    <Route path ='/Resources/detail/:id' element ={<ResourcesDisplay/>}></Route>
    <Route path ='/products/detail/:id' element ={<Cardview/>}></Route>
    <Route path ='/industry' element ={<Industry/>}></Route>
    <Route path ='/Footer' element ={<Footer/>}></Route>
    <Route path ='/RelatedProducts' element ={<RelatedProducts/>}></Route>
    <Route exact path ='/industry/:id' element ={<IndustryDisplay/>}></Route>
  </Routes>
</>
)}

export default App