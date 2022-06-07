import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

const Products = () => {
  const [num,setnum ] =useState();
  useEffect(() => {
    async function getData() {
    const res = await axios.get(`http://sgtest.tk/api/products/get_list/`);
    const data = JSON.stringify(res.data);
    console.log(data);
    setnum(res.data[0].name);
    }
    getData();
  })
  return (<>
    <div>Products</div>
    <p>{num}</p>
    </>
  )
}

export default Products
