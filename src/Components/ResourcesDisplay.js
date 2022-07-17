import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom'
import "./Support.css"
import Faq from "react-faq-component";
const ResourcesDisplay = () => {
const {id}= useParams();
const digit = parseInt(id)+1
const [fdata,setdata] =useState([]);
const[pdf,setpdf] = useState([])
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
    setpdf(res.data.pdfs)
    }
    useEffect(() => { 
    getData();
  },[])

  if (fdata==undefined || faq == undefined || html == undefined || pdf == undefined) {
    return (
      <div>
        <h1>BLANK SA</h1>
      </div>
    );

    }

const styles = {
    bgColor: '#f2f4ff',
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
  <section class="features">
  <div className="carousel-item active">
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown h2-support ">Sensegood Resource Centre – {fdata.name}</h2><br/>
              <p className="animate__animated animate__fadeInUp">{fdata.description}</p>
            </div>
          </div>
        </div>

<div className='container' dangerouslySetInnerHTML={{__html: html}}>
{/* {invoice()} */}
</div>

<section id="about">
      <div class="section-title">
            <h2>Frequently Asked Questions</h2>
        </div>
<div className="container">  
      <div>
            <Faq
                data = {data}
                styles={styles}
                config={config}
            />
        </div>
      </div>
</section>

{/* End of FAQ Section */}


<div class="section-title">
            <h2>{fdata.name}  related downloads</h2>
        </div>
<div class="container">
        <div class="row">
       {pdf.map((val,index) =>{
        return(<>
        <div class="col-lg-4 col-md-4 mt-4"><div class="icon-box"><i class="icofont-download" style={{"color":"#5596B"}}></i><h3>
<a download="" href={val.pdf}>{val.name}</a></h3></div></div> </>)})}
</div>   
</div>
</section>
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