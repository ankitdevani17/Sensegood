import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
const Country = () => {
const [num,setnum ] =useState("IN");
const [id,setid] =useState();
useEffect(() => {
    async function getData() {
    const res = await axios.get(`http://sgtest.tk/api/products/get_checkout_list/${num}/`,{mode:'cors'},{ withCredentials: true }
    ).catch(err =>{
        console.log(err);
    })
    console.log(res);
    setid(res.data);
    }
    getData();
})
  return (
      <>
    <div>Country</div>
    <select value ={num} onChange={(event)=>{
    setnum(event.target.value);
    }}>
        <option value="IN">IN</option>
        <option value="US">US</option>
    </select>
    <p>{id}</p>
    </>
  )
}

export default Country