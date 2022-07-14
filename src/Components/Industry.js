import React, {useState,useEffect} from 'react';
import axios from 'axios'; 
import {Navigate, useNavigate} from "react-router-dom";
const Industry = () => {
const Navigate = useNavigate();
    const [fdata,setdata] =useState();
    // const selectindustry = () =>{
    //     setindustry(industry);
    //     Navigate(`industry/details/${industry}`)
    // }
    async function getData() {
        const res = await axios.get(`/api/products/get_industry_list/`,
        {mode:'cors'},{ withCredentials: true });
        console.log(res.data);
        console.log(res)
        setdata(res.data)
        }
    useEffect(() => {
      getData();
      console.log("called")
    },[])
if (fdata == undefined){
    return <>
    <h2>loading</h2>
  </>
}
  return (
   <>
   <select onChange = {(event)=>{
    Navigate(`/industry/${event.target.value}`)
   
   }} >
{(fdata || []).map((val,index)=>{
  return( 
<>
        <option value={val.name}>{val.name}</option>
</>

  )
})
   
}
</select>

   </>
  )
}

export default Industry