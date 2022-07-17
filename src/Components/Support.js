import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import SupportCard from './SupportCard';
import supportslide from "../images/support-slide.jpg";
const Support = (props) => {
  const [num,setnum ] =useState([]);
  useEffect(() => {
    async function getData() {
    const res = await axios.get(`/api/products/get_list/`,
    {mode:'cors'},{ withCredentials: true });
    console.log(res.data);
    console.log(res.data[0].name);
    setnum(res.data)
    }
    getData();
  },[])
  return (<>


            <div class="container">
              <h2 class="animate__animated animate__fadeInDown h2-support">Sensegood Support Center</h2>
           
              <br/>
              <p class="animate__animated animate__fadeInUp">Whether you need technical support for a device, or just want to learn all there is to know about your Sensegood products, you’ve arrived at the right place.
             
              You can now select and get support for a particular product from variety of products available at Sensegoodinstruments</p>
            </div>
<section className = "section-about">
    <div className="container-about" data-aos="zoom-in">
      <div className="section-title-about">
        <h2>Choose the Product</h2>
      </div>
<div className = "row">
{num.map((val,index) =>{
          return (
            <SupportCard
            key={index}
            id={index}
                img = {val.cover_image}
                name = {val.name} 
            />
          )
        })}
        </div>
        </div>
  </section>
            </>
);

}
export default Support;
