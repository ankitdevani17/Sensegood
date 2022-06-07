import React, {useState,useEffect} from 'react';
import axios from 'axios'; 
import {useNavigate} from "react-router-dom";


const Logout = () => {
  const handleLogout = () => {
    // sending login(username) and password to server  
    axios.post("http://sgtest.tk/api/accounts/logout/", {
      "revoke_token": true
    }, {mode:'cors'},{ withCredentials: true }).then(res => {
    console.log(res.data);
    //alert("success");
   // mode cors is for enabling cross-origin requests in frontend 
  // localStorage.setItem("user-info",res.data.detail);
   //navigate("/data"); // page to be routed to after successful login
  })
   
    .catch(err=>{
      console.log(err);
     // alert("Invalid Credentials");
    })

  }
  return (
    <button onClick ={handleLogout}>Logout</button>
  ) 
}

export default Logout