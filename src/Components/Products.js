import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import Card from './Card';
const Products = (props) => {
  const [num,setnum ] =useState([]);
  useEffect(() => {
    async function getData() {
    const res = await axios.get(`http://sgtest.tk/api/products/get_list/`,
    {mode:'cors'},{ withCredentials: true });
    console.log(res.data);
    console.log(res.data[0].name);
    setnum(res.data)
    }
    getData();
  },[])
  return (<>
<section className = "section-about">
    <div className="container-about" data-aos="zoom-in">
      <div className="section-title-about">
        <h2>Accessories</h2>
      </div>
<div className = "row">
{num.map((val,index) =>{
          return (
            <Card
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
export default Products;
