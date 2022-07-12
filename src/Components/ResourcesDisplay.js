import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom'
import "./ResourceDisplay.css"
import Faq from "react-faq-component";
const ResourcesDisplay = () => {
const {id}= useParams();
const digit = parseInt(id)+1
const [fdata,setdata] =useState([]);

const [faq,setfaq] =useState();
const [html,sethtml ] =useState('');
const invoice = () =>{
  console.log(html)
  document.getElementsByClassName("write-up").innerHTML = html;
// document.body.innerHTML+=html;

} 
    async function getData() {
    const res = await axios.get(`http://sgtest.tk/api/resources/detail/${digit}`,
    {mode:'cors'},{ withCredentials: true });
    console.log(res.data);
    setdata(res.data)
    setfaq(res.data.faqs)
    sethtml(res.data.writeup);
    }
    useEffect(() => { 
    getData();
  },[])

  if (fdata==undefined || faq == undefined) {
    return (
      <div>
        <h1>BLANK SA</h1>
      </div>
    );

    }

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
  // arrowIcon: "V",
  // openOnload: 0,
  // expandIcon: "+",
  // collapseIcon: "-",
};

const data ={
  rows:[
    
    {
      title:fdata.faqs[0].question,
      content : faq[0].answer
    }
  ]
}
  return (
  <>
  <div className="carousel-item active">
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown">Sensegood Resource Centre – Color Education</h2>
              <p className="animate__animated animate__fadeInUp">There’s so much involved in achieving accurate color, it can be hard to know where to start. Being research intensive company in color science and technology, Sensegood offers a variety of information to help you acquire the skills you need to get your color right. From basic color theory to continuous technical education, we offer a wealth of information that fits every learning style. Start your search below.</p>
            </div>
          </div>
        </div>
<div className="container">  
      <h2>Description</h2>
      {fdata.description}
<br/><br/>

<div className='write-up' dangerouslySetInnerHTML={{__html: html}}>
{/* {invoice()} */}
</div>
<h2>FAQS</h2>
      <div>
            <Faq
                data = {data}
                styles={styles}
                config={config}
            />
        </div>
<br/>
<br/>
writeup section

<h1>{fdata.name} related Downloads</h1>
<div className = "row">
        {fdata.pdfs.map((val,index)=>{ 
return(
<>
<div class="col-lg-4 col-md-4 mt-4">
<div class="icon-box">
<i class="icofont-download" style={{"color": "#5596CB"}}></i><h3>
<a download="" href={val.pdf}>{val.name}</a></h3>
</div></div>

</>
)
})}   
</div>   
</div>


  </>
  )
}

export default ResourcesDisplay

      {/* {faq.map(({question,answer},index)=>{ 
return(
<>

</>




)
})}         */}