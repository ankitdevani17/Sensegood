import React, {useState,useEffect} from 'react';
import axios from 'axios'; 
import {useNavigate} from "react-router-dom";
import "./Login.module.css"


const Login = () => {
  const navigate = useNavigate();
  const [username, setusername]= useState("");
  const [password, setPassword]= useState("");
  console.log({username, password});
  const handleusername = (e) => {
    setusername(e.target.value);
  }
  const handlePassword = (e) => { 
    setPassword(e.target.value);
  }
  const handleApi = () => {
    // sending login(username) and password to server  
    axios.post("/api/accounts/login/", {
      login: username,
      password: password
    }, {mode:'cors'},{ withCredentials: true }).then(res => {
    console.log(res.data);
    //alert("success");
   // mode cors is for enabling cross-origin requests in frontend 
   localStorage.setItem("user-info",res.data.detail);
   navigate("/data"); // page to be routed to after successful login
  })
   
    .catch(err=>{
      console.log(err);
     // alert("Invalid Credentials");
    })

  }
  useEffect(() =>{
    if(!localStorage.getItem('detail')){
      //navigate('/log') // navigate back to login if token is not found or not there in local storage
    }
    }, [])
    return (
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
      rel="stylesheet"
    />
      </head>
  <body>
    <div class="container">
      <div class="top-header">
        <h3>Welcome back</h3>
        <p>Enter your credentials to access your account</p>
      </div>
      <form action="">
        <div class="user">
          <i class="bx bxs-user-circle"></i>
          <input value = {username} type ="text" onChange={handleusername} placeholder="Enter your username" />
        </div>
        <div class="pass">
          <i class="bx bxs-lock-alt"></i>
          <input value ={password} type ="password" onChange={handlePassword} placeholder="Enter your password" />
        </div>
      </form>
      <div class="btn">
        <button  onClick = {handleApi}>Sign in</button>
      </div>
    </div>

    {/* <p class="last">Forgot your password? <a href="#"> Reset Password </a></p> */}
    <script src="/app.js"></script>
  </body>
</html>

    )
}
export default Login;



// Logic of logout 
{/* <button onClick ={logout}>Logout</button>

const logout = () => {
  localStorage.removeItem('detail');
} */}
