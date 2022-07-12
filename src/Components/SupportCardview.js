import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import "./Support.css"
import { useParams } from 'react-router-dom'
const SupportCardview = () => {
        // const {id}= useParams();
        // const digit = parseInt(id)+1
        // const [fdata,setdata] =useState([]);
        // const [fmedia,setmedia] =useState();
        // const [html,sethtml ] =useState('');
        // const writeup = () =>{
        //   document.body.innerHTML+=html;
        //     } 
        // async function getData() {
        //   const res = await axios.get(`/api/support/get_product/support/${digit}`,
        //   {mode:'cors'},{ withCredentials: true });
        //   console.log(res.data.product_media[0].image);
        //   setdata(res.data)
        //   console.log(res.data)
        //  setmedia(res.data.product_media)
        //   sethtml(res.data.writeup);
        //   }
        // useEffect(() => { 
        //     getData();

        //   },[])
        //   if (fdata==undefined || fmedia == undefined || html == undefined) {
        //     return (
        //       <div>
        //         <h1>Loading...</h1>
        //       </div>
        //     );}

  return (
    <>  <head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta content="Find Sensegood spectrophotometer brochure, specifications, user manual, troubleshooting guide, video narrations and frequent user concerns. Read more." name="description"/>
    <meta content="spectrophotometer, colorimeter, color measurement, color meter, sensegood spectrophotometer, measure color, CIELab, HunterLab, whiteness meter, sensegood instruments, spectrometer, visible spectrophotometer, how to use a spectrophotometer, spectrophotometry, affordable spectrophotometer, affordable colorimeter, vis spectrophotometer, beam spectrophotometer, how to use a colorimeter, how to measure color, digital color meter, Best spectrophotometer, best colorimeter, Color Measurement Spectroscopy, colorimeter vs. spectrophotometer, difference between colorimeter and spectrophotometer, how spectrophotometer works, how to use spectrophotometer, using a spectrophotometer, how do you measure color, benchtop spectrophotometer, tabletop, online inline spectrophotometer, non-contact spectrophotometer, handheld portable spectrophotometer, whiteness measurement, spectrophotometer color, spectrophotometer color measurement, sensegood, color temperature, chroma meter, color measurement device, economic spectrophotometer, economic colorimeter, color measuring instrument, tintometer, l a b color measurement, spectrophotometer tutorial, spectrophotometer working principle, spectrophotometer demonstration, colorimeter working principle, cielab color measurement, lab color space" name="keywords"/>

  </head>
 <section class="features">
      <div class="container">
        <p>Our services range from technical support, maintenance, calibration and repair. We aim to keep your instrument working at its best, letting you focus on what matters the most. Find support resources including documentation, video narrations, troubleshooting guide, frequently asked user concerns and downloads.</p>
        <br/>
        <div class="section-title">
            <h2>Related downloads</h2>
        </div>
        <div class="row">
        <div class="col-lg-4 col-md-4 mt-4"><div class="icon-box"><h3><a download="" href="supportpdf/uploads/Sensegood spectrophotometer Assembly and Quick start guide.pdf">Assembly and Quick start guide</a></h3></div></div><div class="col-lg-4 col-md-4 mt-4"><div class="icon-box"><h3><a download="" href="supportpdf/uploads/Sensegood spectrophotometer Specifications.pdf">
        Specifications</a></h3></div></div><div class="col-lg-4 col-md-4 mt-4"><div class="icon-box"><h3><a download="" href="supportpdf/uploads/Sensegood spectrophotometer Brochure.pdf">
        Brochure</a></h3></div></div><div class="col-lg-4 col-md-4 mt-4"><div class="icon-box"><h3><a download="" href="supportpdf/uploads/Sensegood spectrophotometer User manual.pdf">User manual</a></h3></div></div><div class="col-lg-4 col-md-4 mt-4"><div class="icon-box"><h3><a download="" href="supportpdf/uploads/Sensegood spectrophotometer Troubleshooting guide.pdf">Troubleshooting guide</a></h3></div></div><div class="col-lg-4 col-md-4 mt-4"><div class="icon-box"><h3><a download="" href="supportpdf/uploads/Industries we serve Spectrophotometer color measurement.pdf">Industries we serve</a></h3></div></div><div class="col-lg-4 col-md-4 mt-4"><div class="icon-box"><h3><a download="" href="supportpdf/uploads/Sensegood whiteness meter brightness tester reflectance meter yellowness tester.pdf">Whiteness Tester Brochure</a></h3></div></div><div class="col-lg-4 col-md-4 mt-4"><div class="icon-box"><h3><a download="" href="supportpdf/uploads/Sensegood Professional Coffee Roast Analyzer.pdf">Sensegood Professional Coffee Roast Analyzer</a></h3></div></div> 
          <div class="col-lg-4 col-md-4">
            <div class="icon-box">
    
              <h3><a download="1.docx" href="">Brochure</a></h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mt-4 mt-md-0">
            <div class="icon-box">
              
              <h3><a download="1.docx" href="">Specifications</a></h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mt-4 mt-md-0">
            <div class="icon-box">
              
              <h3><a download="1.docx" href="">Assembly and quick start guide</a></h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mt-4">
            <div class="icon-box">
              
              <h3><a download="1.docx" href="">User’s manual</a></h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mt-4">
            <div class="icon-box">
              
              <h3><a download="1.docx" href="">Troubleshooting guide</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* End of pdf download section */}

    <section id="about" class="about">
        <div class="container">
            <div class="section-title">
                <h2>Video Gallery</h2>
            </div>
            <div class="row">
            <div class="col-lg-4 col-6" ><div class="video-box">
            <img src="https://sensegoodinstruments.com/supportvideo/uploadvideoimage/1609138277_2073.jpg" class="img-fluid" alt="" />
            <a href="https://youtu.be/3p5f7nAK9TI" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true">
            </a></div><br/>
            <center>Meet Sensegood Spectrophotometer: All-in-One color measurement instrument</center>
            </div>          
            </div>
            <br/>
        </div>
    </section>

    
      {/* end of video gallery section */}
    </>
  


  )
}

export default SupportCardview