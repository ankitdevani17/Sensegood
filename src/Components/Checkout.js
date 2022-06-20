import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

const Checkout = () => {
  const handleRazorpay = () => {

  }
  const [price,setprice ] =useState();
  const [html,sethtml ] =useState();
  useEffect(() => {
    async function getData() {
    const res = await axios.get(`/api/billing/bill/`,
    {mode:'cors'},{ withCredentials: true });
    //const data = JSON.stringify(res.data);
    //let newdata = JSON.parse(data);
    //console.log(res.data.invoice);
    setprice(res.data.total_amount.amount);
    sethtml(res.data.invoice);
    }
    getData();
  })
  return (<>
    <div>Checkout</div>
    <p>FINAL AMOUNT : {price}</p>

    <div>{document.write(html)}</div>
    <button onClick ={handleRazorpay}>Pay Now </button>

    </>
  )
}


export default Checkout;
