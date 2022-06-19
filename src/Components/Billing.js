import React, {useState, useEffect} from 'react';
import axios from 'axios'; 


const Billing = () => {
    const [name, setname]= useState("");
    const [zipcode, setzipcode]= useState("");
    const [address, setaddress]= useState("");
    const [email, setemail]= useState("");
    const [phnnumber, setphnnumber]= useState("");
    const [country,setcountry] = useState("IN");
    console.log({name, zipcode});
    const handlename = (e) => {
      setname(e.target.value);
    }
    const handlephnnumber = (e) => {
        setphnnumber(e.target.value);
      }
    const handleemail= (e) => {
        setemail(e.target.value);
      }
    const handlezipcode = (e) => { 
      setzipcode(e.target.value);
    }
    const handleaddress = (e) => { 
        setaddress(e.target.value);
      }
    const handleApi = () => {
      // sending login(name) and password to server  
      axios.post("/api/billing/billing_address/", {
        name: name,
        address: address,
        email: email,
        phone_number: phnnumber,
        zip_code: zipcode,
        country : country

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
      <>
    <div>Billing</div>
    name : <input value = {name} type ="text" onChange={handlename}/> <br/>
    email : <input value ={email} type ="text" onChange={handleemail}/><br/>
    zip code : <input value ={zipcode} type ="text" onChange={handlezipcode}/><br/>
    address : <input value ={address} type ="text" onChange={handleaddress}/><br/>
    phone number : <input value ={phnnumber} type ="number" onChange={handlephnnumber}/><br/>
    Country : <select value ={country} onChange={(event)=>{
    setcountry(event.target.value);
    }}>
        <option value="IN">India</option>
        <option value="US">USA</option>
    </select> <br/>
<button onClick = {handleApi}>Submit</button>
</>
  )
}

export default Billing




