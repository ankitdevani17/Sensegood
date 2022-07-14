import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import Card from './Card';
import { useParams } from 'react-router-dom'
const IndustryDisplay = () => {
  const {id}= useParams();
        const [fdata,setdata] =useState([])
        async function getData() {
          const res = await axios.get(`/api/products/get_products_by_industry/${id}`,
          {mode:'cors'},{ withCredentials: true });
          setdata(res.data)
          console.log(res.data)
          }
        useEffect(() => { 
            getData();

          },[])
          if (fdata==undefined) {
            return (
              <div>
                <h1>Loading...</h1>
              </div>
            );}

  return (
    <>
<section className = "section-about">
    <div className="container-about" data-aos="zoom-in">
      <div className="section-title-about">
        <h2>Accessories</h2>
      </div>
<div className = "row">
{fdata.map((val,index) =>{
          return (
            <Card
            key={index}
            id={index}
                img = {val.product_image}
                name = {val.product_name} 
            />
          )
        })}
        </div>
        </div>
  </section>
   </>)

}

export default IndustryDisplay