import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { useStateIfMounted } from 'use-state-if-mounted';
var temp =0;//delared globally to access amoung all functions
const Country = () => {
const [country,setcountry ] =useState("IN");
const [fdata,setdata] =useState("");
const [Quant,SetQuant]
 = useState(0);
 const [totalamount,settotalamount] = useState()
useEffect(() => {
    async function getData() {
    const res = await axios.get(`/api/products/get_checkout_list/${country}/`,{mode:'cors'},{ withCredentials: true }
    );
    //const serverdata = JSON.stringify(res);   
    console.log(res);
    setdata(res.data);
    console.log("data set")
      }
  let a =  getData();
  a.then(()=>{
    initialPrice(fdata);
      console.log("promise resolved");
  })

},[])
function initialPrice (fdata) {
console.log("kei bhi")
var temp =0;
for (var i = 0; i < fdata.length; i++) {
console.log("changing temp")
temp = temp + fdata[i].quantity * fdata[i].price.amount;

  }
  console.log("total amount printing")
  settotalamount(temp);
}

const Increment = (key) =>{
  
  var ind = fdata.indexOf(key);
  fdata[ind].quantity = fdata[ind].quantity + 1;
  console.log(fdata[ind].id)
  axios.put(`/api/cart/item/${fdata[ind].id}/`, {
   quantity: fdata[ind].quantity 
  }, {mode:'cors'},{ withCredentials: true }).then(res => {
  console.log(res.data);
  //alert("success");
 // mode cors is for enabling cross-origin requests in frontend 
})
 
  .catch(err=>{
    console.log(err);
   // alert("Invalid Credentials");
  })
  temp =temp + fdata[ind].price.amount;
 settotalamount(temp);
if (Quant < 99){
SetQuant(Quant+1);}
}
const Decrement = (key) =>{
  
  var ind = fdata.indexOf(key);
  fdata[ind].quantity = fdata[ind].quantity - 1;
  axios.put(`/api/cart/item/${fdata[ind].id}/`, {
    quantity: fdata[ind].quantity 
   }, {mode:'cors'},{ withCredentials: true }).then(res => {
   console.log(res.data);
   //alert("success");
  // mode cors is for enabling cross-origin requests in frontend 
 })
  
   .catch(err=>{
     console.log(err);
    // alert("Invalid Credentials");
   })
 temp =temp - fdata[ind].price.amount;
 settotalamount(temp);
  if (Quant > 0){
    SetQuant(Quant-1);}
}

var viewproducts ="";
viewproducts = (fdata || []).map((key,index) => {
    return( 

      <>

            <div>PRODUCT NAME : {key.name}  </div>
            <div>PRODUCT PRICE : {key.price.amount}  </div>
            
            {key.quantity}<button onClick={()=>Increment(key)}> Add </button>
            <button onClick={()=>Decrement(key)}> Subtract </button>
            
 </>
    )
})

  return (
      <>

    <div>Country</div>
    <select value ={country} onChange={(event)=>{
    setcountry(event.target.value);
    }}>
        <option value="IN">IN</option>
        <option value="US">US</option>
    </select>

    {viewproducts} <br/>
    Total amount : {totalamount}
   

    </>
  )
}

export default Country