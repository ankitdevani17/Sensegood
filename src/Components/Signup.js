import React, {useState,useEffect} from 'react';
import axios from 'axios'; 
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const [username, setusername]= useState("");
    const [password, setPassword]= useState("");
    const [cpassword, setCPassword]= useState("");
    const [email, setemail]= useState("");
    console.log({username, password});
    const handleusername = (e) => {
      setusername(e.target.value);
    }
    const handleemail= (e) => {
        setemail(e.target.value);
      }
    const handlepassword = (e) => { 
      setPassword(e.target.value);
    }
    const handlecpassword = (e) => { 
        setCPassword(e.target.value);
      }
    const handleApi = () => {
      // sending login(username) and password to server  
      axios.post("http://sgtest.tk/api/accounts/register/", {
        username: username,
        password: password,
        email: email,
        password_confirm : cpassword

      }, {mode:'cors'},{ withCredentials: true }).then(res => {
      console.log(res.data);
      //alert("success");
     // mode cors is for enabling cross-origin requests in frontend 
     localStorage.setItem("user-info",res.data.detail);
     //navigate("/data"); // page to be routed to after successful login
    })
     
      .catch(err=>{
        console.log(err);
       // alert("Invalid Credentials");
      })
  
    }
  return (
    <div>   Signup 
    username : <input value = {username} type ="text" onChange={handleusername}/> <br/>
    email : <input value ={email} type ="text" onChange={handleemail}/><br/>
    password : <input value ={password} type ="password" onChange={handlepassword}/><br/>
    confirm password : <input value ={cpassword} type ="password" onChange={handlecpassword}/><br/>
<button onClick = {handleApi}>Login</button>
  </div>
  )
}

export default Signup