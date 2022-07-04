import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import "./Country.css"
import { useStateIfMounted } from 'use-state-if-mounted';
import { Navigate } from 'react-router-dom';
//delared globally to access amoung all functions
const Country = () => {
const [country,setcountry ] =useState("INDIA");
const [list,setlist ] =useState([]);
const [fdata,setdata] =useState([]);

 const [totalamount,settotalamount] = useState()

 async function getCountry() {
  const res = await axios.get(`http://sgtest.tk/api/products/get_country_list`,{mode:'cors'},{ withCredentials: true }
  );
  //const serverdata = JSON.stringify(res);   
  console.log(res);
  setlist(res.data)
    }
useEffect(() => {
  getCountry();
 } ,[])

 async function getData() {
  const res = await axios.get(`/api/products/get_checkout_list/${country}/`,{mode:'cors'},{ withCredentials: true }
  );
  //const serverdata = JSON.stringify(res);   
  console.log(res);
  setdata(res.data);
  // initialPrice(res.data);
  console.log("data set")
    }

useEffect(() => {
  getData();
}

,[country])

useEffect(() => {
  initialPrice(fdata);
} ,[fdata])

function initialPrice (fdata) {
  console.log("kei bhi")
  let temp = 0;
  fdata.map((val,index)=>{ 
    console.log("inside")  
  temp = temp + val.price.amount*val.quantity
   
    }) 
    console.log("total amount printing")
    settotalamount(temp);
  }

if(fdata == undefined || list == undefined || country == undefined || totalamount == undefined){
  return <>
    <h2>loading</h2>
  </>
}

// useEffect(()=>{
//   console.log(totalamount,"use");
// },[totalamount])

const Increment = (key) =>{

  var temp = 0;
  var ind = fdata.indexOf(key);
  console.log(fdata[ind].quantity,"hi" )
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
  }


const Decrement = (key) =>{
  var temp = 0;
  var ind = fdata.indexOf(key);
  if (fdata[ind].quantity > 0){
  console.log(fdata[ind].quantity,"hi" )
  axios.put(`/api/cart/item/${fdata[ind].id}/`, {
    quantity: fdata[ind].quantity-1
 
   }, {mode:'cors'},{ withCredentials: true }).then(res => {
   console.log(res.data);
   //alert("success");
  // mode cors is for enabling cross-origin requests in frontend 
 })
  
   .catch(err=>{
     console.log(err);
    // alert("Invalid Credentials");
   })
  fdata[ind].quantity = fdata[ind].quantity - 1;
  console.log(fdata[ind].quantity,"bye" )
  temp = totalamount -  fdata[ind].price.amount;
  console.log(temp, "fuiksfj")
  settotalamount(temp);
  // console.log(fdata[ind].id)
  }}
var viewproducts ="";
viewproducts = (fdata || []).map((key,index) => {
    return( 
      <>
                <tr>
                          <td>
                          {key.id}
                          </td>
                          <td>
                          {key.name}
                          </td>
                          <td><font id="ssprice">
                          {key.price.amount}</font> 
                          </td>
                          <td>                      <div id="qty-input" class="qty-input">
                              {/* <button  onClick={()=>Decrement(key)}style = {{"marginRight": "5px"}}> Remove </button> */}
                              <i className = "icon-country" onClick ={()=>Decrement(key)} id="less" class="less"> - </i>
                              <input type="text" readonly="" class="mainproduct" value={key.quantity}/>
                              {/* <button onClick={()=>Increment(key)} style = {{"marginLeft": "5px"}}> Add </button> */}
                              <i className = "icon-country" onClick ={()=>Increment(key)} id="less" class="less"> + </i>
                            </div>
                          </td>
                          <td>
                          {key.quantity*key.price.amount}
                          </td>
      
                      </tr> 

            {/* <div>PRODUCT NAME : {key.name}  </div>
            <div>PRODUCT PRICE : {key.price.amount}  </div>
            
            {key.quantity}<button onClick={()=>Increment(key)}> Add </button>
            <button onClick={()=>Decrement(key)}> Subtract </button> */}
            
 </>
    )
})
  return (
//       <>

// <select value ={country} onChange={(event)=>(setcountry(event.target.value))}>
// {list.map((val,index)=>{
//   return( 
// <>
//         <option value={val.country}>{val.country}</option>
// </>

//   )
// })
   
// }
// </select>

//     </>

<>

    {/* {viewproducts} <br/>
    Total amount : {totalamount} */}
    <div class="container" data-aos="zoom-in">
        <div class="section-title">
          <h2 className = "h2-country">Purchase Sensegood Instruments</h2>
        </div>
        <div class="row justify-content-center country">
          <div class="col-md-6">
            <h4 className = "h4-country">Select Your Country : </h4>
          </div>
          <div class="col-md-6">
          <select value ={country} onChange={(event)=>(setcountry(event.target.value))}>
{list.map((val,index)=>{
  return( 
<>
        <option value={val.country}>{val.country}</option>
</>

  )
})
   
}
</select>
<br/>
<br/>

          </div>
          </div>
        </div>
        <div class="container" style={{"border-radius":"5px"}} id="listing">
            
            <table class="table">  
                      <tbody>  
                      <tr>
                          <th>Sr. No</th>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                      </tr>   
{viewproducts}   
</tbody>
</table>
</div>  
<br/>
        <div class="row justify-content-center">
        <div className = "col-md-6">
        <h3>Cart Total : {totalamount}</h3>
        <div className = "col-md-6"> 

        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
                        <div class="col-md-10">
                          <h4>Points to Note:</h4>
                          <hr/>
                          <ul><li>In case of any queries, please reach out to: sensegoodinstruments@gmail.com</li><li>Price includes the FOB freight. We ship worldwide with DHL Express.</li></ul>
                          </div> 
                          <button className = "button-country" onClick = {()=>{
     Navigate('/checkout')
}}>Next Step </button></div>      

    </>
  )
}

export default Country
