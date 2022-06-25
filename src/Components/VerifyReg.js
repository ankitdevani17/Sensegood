import React from "react"
import { useSearchParams } from "react-router-dom"
import axios from 'axios'; 
const VerifyReg = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let user_id = searchParams.get("user_id")
  let timestamp = searchParams.get("timestamp")
  let signature= searchParams.get("signature")

axios.post('/api/accounts/verify-registration/', {
  user_id:user_id,
	timestamp:timestamp,
	signature:signature
}, {mode:'cors'},{ withCredentials: true }).then(res => {
console.log(res);
//alert("success");
// mode cors is for enabling cross-origin requests in frontend 
//navigate("/data"); // page to be routed to after successful login
})

.catch(err=>{
  console.log(err);
 // alert("Invalid Credentials");
})

  return (
    <>

    </>

  )
}

export default VerifyReg;
