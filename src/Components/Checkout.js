import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import Razorpay from './Razorpay';
const Checkout = () => {
  const [price,setprice ] =useState();
  const [html,sethtml ] =useState();
  const invoice = () =>{
document.body.innerHTML+=html;
  }  
  useEffect(() => {
    async function getData() {
    const res = await axios.get(`/api/billing/bill/`,
    {mode:'cors'},{ withCredentials: true });
    //const data = JSON.stringify(res.data);
    //let newdata = JSON.parse(data);
    console.log(res.data.razorpay);
    setprice(res.data.total_amount.amount);
    sethtml(res.data.invoice);

    }
    getData();
    invoice();

  },[])
  return (<>
    <div>Checkout</div>
    <p>FINAL AMOUNT : {price}</p>
    <div id="container">
    </div>
    {/* <div><>{document.write(html)}</></div> */}
    {/* <Razorpay onClick={Razorpay} /> */}
    {/* <button onClick ={Razorpay.Razorpay}>Pay Now </button> */}

    </>
  )
}


export default Checkout;
