import React, {useState,useEffect} from 'react';
import axios from 'axios'; 
import {Navigate, useNavigate} from "react-router-dom";
const Industry = () => {
    const [fdata,setdata] =useState();
    const [industry,setindustry ] =useState("");
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
    },[])
if (fdata == undefined || industry == undefined){
    return <>
    <h2>loading</h2>
  </>
}
  return (
   <>
   <select onChange = {(event)=>{
    setindustry(event.target.value);
    
    Navigate(`/industry/id`)
    console.log(event.target.value);
   }} >
  <option value=""> </option>
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