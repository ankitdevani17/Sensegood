import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { useStateIfMounted } from 'use-state-if-mounted';
//delared globally to access amoung all functions
const Country = () => {
const [country,setcountry ] =useState();
const [list,setlist ] =useState([]);
const [fdata,setdata] =useState([]);
const [Quant,SetQuant]
 = useState(0);

 const [totalamount,settotalamount] = useState()

 async function getCountry() {
  const res = await axios.get(`/api/products/get_country_list`,{mode:'cors'},{ withCredentials: true }
  );
  //const serverdata = JSON.stringify(res);   
  console.log(res);
  setlist(res.data)
    }
useEffect(() => {
  getCountry();
 } ,[])
useEffect(() => {
 
  // while(country!=undefined){

  // }
    async function getData() {
    const res = await axios.get(`/api/products/get_checkout_list/INDIA/`,{mode:'cors'},{ withCredentials: true }
    );
    //const serverdata = JSON.stringify(res);   
    console.log(res);
    setdata(res.data);
    // initialPrice(res.data);
    console.log("data set")
      }
       getData();

},[country])

// if(fdata == undefined || list == undefined || country == undefined){
//   return <>
//     <h2>loading</h2>
//   </>
// }
// function initialPrice (fdata) {
// console.log("kei bhi")
// var temp=0;
// for (var i = 0; i < fdata.length; i++) {
// console.log("changing temp")
//  temp = temp + fdata[i].quantity * fdata[i].price.amount;
//   }
//   console.log("total amount printing")
//   settotalamount(temp);
// }
// useEffect(()=>{
//   console.log(totalamount,"use");
// },[totalamount])

const Increment = (key) =>{
  var temp = 0;
  var ind = fdata.indexOf(key);
  console.log(fdata[ind].quantity,"hi" )
  var temp3 = fdata[ind]
  axios.put(`/api/cart/item/${fdata[ind].id}/`, {
    quantity: fdata[ind].quantity+1
 
   }, {mode:'cors'},{ withCredentials: true }).then(res => {
   console.log(res.data);
   //alert("success");
  // mode cors is for enabling cross-origin requests in frontend 
 })
  
   .catch(err=>{
     console.log(err);
    // alert("Invalid Credentials");
   })
  fdata[ind].quantity = fdata[ind].quantity + 1;
  console.log(fdata[ind].quantity,"bye" )
  temp = totalamount +  fdata[ind].price.amount;
  console.log(temp, "fuiksfj")
  settotalamount(temp);
  // console.log(fdata[ind].id)


if (Quant < 99){
SetQuant(Quant+1);}
}
const Decrement = (key) =>{
  var temp = 0;
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
 temp =- fdata[ind].price.amount;
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
{list.map((val,index)=>{
  return( 
<>

        <option value={val.country}>{val.country}</option>
    
</>

  )
})
   
}
</select>
    {viewproducts} <br/>
    Total amount : {totalamount}
   

    </>
  )
}

export default Country