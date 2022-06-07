import React, {useState,useEffect} from 'react';
import axios from 'axios'; 
import {useNavigate} from "react-router-dom";


const Logout = () => {
    
  return (
    <button onClick ={logout}>Logout</button>
  ) 
}

export default Logout