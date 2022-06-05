import React, {useState} from 'react';
import axios from 'axios';


const App = () => {

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
  axios.post("http://sgtest.tk/api/accounts/login/", {
    login: username,
    password: password
  }, {mode:'cors'},{ withCredentials: true }).then(res => {
  console.log(res.data);
  alert("success");
 // mode cors is for enabling cross-origin requests in frontend 
 //localStorage.setItem("user-info",JSON.stringify(res));
})
 
  .catch(err=>{
    console.log(err);
  })


}
  return (
    <div>
      username : <input value = {username} type ="text" onChange={handleusername}/> <br/>
      Password : <input value ={password} type ="password" onChange={handlePassword}/><br/>
<button onClick = {handleApi}>Login</button>
    </div>
  )
}

export default App