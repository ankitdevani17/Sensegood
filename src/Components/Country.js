import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { useStateIfMounted } from 'use-state-if-mounted';
var totalamount = 0; //delared globally to access amoung all functions
const Country = () => {
const [country,setcountry ] =useState("IN");
const [fdata,setdata] =useState();
const [Quant,SetQuant]
 = useState(0);
useEffect(() => {
    async function getData() {
    const res = await axios.get(`/api/products/get_checkout_list/${country}/`,{mode:'cors'},{ withCredentials: true }
    ).catch(err =>{
        console.log(err);
    })
    //const serverdata = JSON.stringify(res);   
    console.log(res);
    setdata(res.data);
      }
    getData();
    initialPrice();

},[])
  function initialPrice () {
  for (let i = 0; i < fdata.length; i++) {
  totalamount = totalamount + fdata[i].quantity * fdata[i].price.amount;
  }
  return totalamount;
}

const Increment = (key) =>{
  var ind = fdata.indexOf(key);
  fdata[ind].quantity = fdata[ind].quantity + 1;
  totalamount = totalamount + fdata[ind].price.amount;
if (Quant < 99){
SetQuant(Quant+1);}
}
const Decrement = (key) =>{
  var ind = fdata.indexOf(key);
  fdata[ind].quantity = fdata[ind].quantity - 1;
  totalamount = totalamount - fdata[ind].price.amount;
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

    {viewproducts}
    {totalamount}
   

    </>
  )
}

export default Country