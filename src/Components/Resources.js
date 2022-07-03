import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import ResourceCard from './ResourceCard';
const Resources = () => {
    const Navigate = useNavigate();
    const [fdata,setdata] =useState([]);
    useEffect(() => { 
        async function getData() {
        const res = await axios.get(`api/resources/list/`,
        {mode:'cors'},{ withCredentials: true });
        console.log(res.data);
        setdata(res.data)
        }
        getData();
      },[])
    //   const Increment = (key) =>{
        
    //     var ind = fdata.indexOf(key);
    //     console.log(ind);
    //     console.log(fdata[ind],"hi" )
    //  Navigate(`/resources/detail/${fdata.indexOf(key)}`)
    return(<>
      <section className = "section-about">
      <div className="container-about" data-aos="zoom-in">
        <div className="section-title-about">
          <h2>Resources</h2>
        </div>
  <div className = "row">
  {fdata.map((val,index) =>{
            return (
              <ResourceCard
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
        
export default Resources;