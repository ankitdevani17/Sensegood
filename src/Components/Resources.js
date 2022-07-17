import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import ResourceCard from './ResourceCard';
import "./Support.css"
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
      <div className="carousel-item active">
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown h2-support">Sensegood Resource Centre</h2>
              <p className="animate__animated animate__fadeInUp">There’s so much involved in achieving accurate color, it can be hard to know where to start. Being research intensive company in color science and technology, Sensegood offers a variety of information to help you acquire the skills you need to get your color right. From basic color theory to continuous technical education, we offer a wealth of information that fits every learning style. Start your search below.</p>
            </div>
          </div>
        </div>
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