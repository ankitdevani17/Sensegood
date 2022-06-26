import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import "./Billing.css"
const Billing = () => {
    const [name, setname]= useState("");
    const [zipcode, setzipcode]= useState("");
    const [address, setaddress]= useState("");
    const [email, setemail]= useState("");
    const [phnnumber, setphnnumber]= useState("");
	const [gst, setgst]= useState("");
	const [website, setwebsite]= useState("");
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
	  const handlegst = (e) => { 
        setgst(e.target.value);
      }
	  const handlewebsite = (e) => { 
        setwebsite(e.target.value);
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

<div>
 <div classname="container-billing">
		<div class="form">
			<form className = "form-billing">	
				<div class="title">
					<h2 className = "h2-billing">Shipping & Billing Details</h2>
				</div>
				<div class="shipping">
					<h3 className = "h3-billing">Shipping Address</h3>
				
				<div class="row1">
					<div class="first-name"><label className = "label-billing" for="">First Name</label><input className="input-billing"  value = {name} type ="text" onChange={handlename} /></div>
					<div class="first-name"><label className = "label-billing" for="">Email</label><input className="input-billing"  value ={email} type ="text" onChange={handleemail} /></div>
				</div>
				
				<div class="row2">
					<div class="address"><label className = "label-billing" for="">Address</label><input className="input-billing" value ={address} type ="text" onChange={handleaddress}/></div>
					<div class="postal-code"><label className = "label-billing" for="">ZIP/Postal Code</label><input className="input-billing" value ={zipcode} type ="text" onChange={handlezipcode}/></div>
				</div>
				
				<div class="row3">
					<div class="city"><label className = "label-billing" for="">City</label><input className="input-billing" type="text"/></div>
					<div class="country">
						<div class="label">
							<label className = "label-billing" for="">Country</label>
						</div>
						<div class="input">
							<input className="input-billing" type="text"/>
						</div>
					</div>
				</div>
			</div>
			<div class="billing">
			<h3 className = "h3-billing">Billing Address</h3>
			<div class="row1">
					<div class="checkbox">
						<input className="input-billing" type="checkbox"/>	
						<label className = "label-billing-check">
							<strong>Is the Billing Address the same as the Shipping Address?</strong>
						</label>
					</div>
			</div>

			<div class="row2">
				<div class="first-name"><label className = "label-billing" for="">First Name</label><input className="input-billing" type="text"/></div>
				<div class="last-name"><label className = "label-billing" for="">Last Name</label><input className="input-billing" type="text"/></div>
			</div>
			
			<div class="row3">
				<div class="address"><label className = "label-billing" for="">Address</label><input className="input-billing" type="text"/></div>
				<div class="postal-code"><label className = "label-billing" for="">ZIP/Postal Code</label><input className="input-billing" type="text"/></div>
			</div>
			
			<div class="row4">
				<div class="city"><label className = "label-billing" for="">Phone Number</label><input className="input-billing" value ={phnnumber} type ="number" onChange={handlephnnumber}/></div>
				<div class="country">
					<div class="label"><label className = "label-billing" for="">Country</label>
					</div>
					<div class="input">
						<input className="input-billing" value ={country} onChange={(event)=>{
    setcountry(event.target.value);
    }}/>
					</div>
				</div>
			</div>
		</div>
	    <div class="row6">
				<div class="address"><label className = "label-billing" for="">GST Number</label><input className="input-billing"  value ={gst} type ="number" onChange={handlegst}/> </div>
				<div class="postal-code"><label className = "label-billing" for="">Website</label><input className="input-billing"  value ={website} type ="text" onChange={handlewebsite}/></div>
			</div>
		<div class="row5">
			<div class="button">
				<button className = "button-billing"> Go Back </button>
			</div>
			<div class="button">
				<button className = "button-billing" onClick={handleApi}>Next Step </button>
			</div>
		</div>
	</form>
	</div>
	</div>
</div>
</>)}
export default Billing;