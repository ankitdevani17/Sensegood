import React, {useState,useEffect} from 'react';
import axios from 'axios'; 
import {useNavigate} from "react-router-dom";
import "./Signup.css"

const Signup = () => {
  const navigate = useNavigate();
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
      axios.post("/api/accounts/register/", {
        username: username,
        password: password,
        email: email,
        password_confirm : cpassword

      }, {mode:'cors'},{ withCredentials: true }).then(res => {
      console.log(res.data);
      //alert("success");
     // mode cors is for enabling cross-origin requests in frontend 
     localStorage.setItem("user-info",res.data.detail);
     navigate("/Aftersignup"); // page to be routed to after successful login
    })
     
      .catch(err=>{
        console.log(err);
       // alert("Invalid Credentials");
      })
  
    }
  return (
    <>
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
        <div class="container-sign">
          <div class="top-header">
            <h3>New user?</h3>
            <p className = "p-sign">Enter your details to dive in</p>
          </div>
          <form action="">
            <div class="user">
              <i class="bx bxs-user-circle"></i>
              <input value = {username} type ="text" onChange={handleusername} placeholder="Enter your username" />
            </div>
            <div class="pass">
            <i class='bx bx-envelope'></i>
              <input value ={email} type ="text" onChange={handleemail} placeholder="Enter your email" />
            </div>
            <div class="pass">
              <i class="bx bxs-lock-alt"></i>
              <input value ={password} type ="password" onChange={handlepassword} placeholder="Enter your password" />
            </div>
            <div class="pass">
              <i class="bx bxs-lock-alt"></i>
              <input value ={cpassword} type ="password" onChange={handlecpassword} placeholder="Confirm Password" />
            </div>
          </form>
          <div class="btn">
            <button  onClick = {handleApi}>Sign up</button>
          </div>
        </div>
        <script src="/app.js"></script>
      </body>
    </html>
    </>
  )
}

export default Signup