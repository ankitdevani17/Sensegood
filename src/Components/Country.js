import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
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
},[])
const Increment = () =>{
if (Quant < 99){
SetQuant(Quant+1);}
}
const Decrement = () =>{
  if (Quant > 0){
    SetQuant(Quant-1);}
}
var viewproducts ="";
viewproducts = (fdata || []).map((item) => {
    return(
      <>
            <div>PRODUCT NAME : {item.name}  </div>
            <div>PRODUCT PRICE : {item.price.amount}  </div>
            
            {Quant}<button onClick={Increment}> Add </button>
            <button onClick={Decrement}> Subtract </button>

            <div>FINAL AMOUNT FOR PROUCT :   </div>
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

    </>
  )
}

export default Country