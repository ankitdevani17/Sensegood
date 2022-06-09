import React, {useState,useEffect} from 'react';
import axios from 'axios'; 
import {useNavigate} from "react-router-dom";


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
      <div>
        username : <input value = {username} type ="text" onChange={handleusername}/> <br/>
        Password : <input value ={password} type ="password" onChange={handlePassword}/><br/>
  <button onClick = {handleApi}>Login</button>
      </div>
    )
}
export default Login;



// Logic of logout 
{/* <button onClick ={logout}>Logout</button>

const logout = () => {
  localStorage.removeItem('detail');
} */}
