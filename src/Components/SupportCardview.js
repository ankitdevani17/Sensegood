import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import "./Support.css"
import { useParams } from 'react-router-dom'
import Faq from "react-faq-component";
const SupportCardview = () => {
        const {id}= useParams();
        const digit = parseInt(id)+1
        const [fdata,setdata] =useState([]);
        const [html,sethtml ] =useState('');
        const[pdf,setpdf] = useState([])
        const [media,setmedia] = useState([])
        async function getData() {
          const res = await axios.get(`/api/support/get_product_support/${digit}`,
          {mode:'cors'},{ withCredentials: true });
          // console.log(res.data.product_media[0].image);
          setdata(res.data)
          console.log(res.data.pdf[0].name)
          setpdf(res.data.pdf)
          setmedia(res.data.videos)
        //  setmedia(res.data.product_media)
          sethtml(res.data.writeup);
          }
        useEffect(() => { 
            getData();

          },[])
        //   const styles = {
        //     bgColor: "#f2f4ff",
        //     titleTextColor: "blue",
        //     rowTitleColor: "blue",
        //     // rowContentColor: 'grey',
        //     // arrowColor: "red",
        // };
        
        // const config = {
        //   // arrowIcon: "V",
        //   // openOnload: 0,
        //   // expandIcon: "+",
        //   // collapseIcon: "-"
        // };
        
        // const data ={
        //   rows:[

        //     {
        //       title:fdata.faq[0].question,
        //       content : fdata.faq[0].answer
        //     }
        //   ]
        // }
          if (fdata==undefined || pdf == undefined || media == undefined || html == undefined) {
            return (
              <div>
                <h1>Loading...</h1>
              </div>
            );}

  return (
    <>  
    
 <section class="features">
      <div class="container">
        <p>Our services range from technical support, maintenance, calibration and repair. We aim to keep your instrument working at its best, letting you focus on what matters the most. Find support resources including documentation, video narrations, troubleshooting guide, frequently asked user concerns and downloads.</p>
        <br/>
        <div className='write-up' dangerouslySetInnerHTML={{__html: html}}></div>
        <br/>
        <br/>
        <div class="section-title">
            <h2>Related downloads</h2>
        </div>
        <div class="row">
       {pdf.map((val,index) =>{
        return(<>
        <div class="col-lg-4 col-md-4 mt-4"><div class="icon-box"><i class="icofont-download" style={{"color":"#5596B"}}></i><h3>
<a download="" href={val.pdf}>{val.name}</a></h3></div></div> </>)})}

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
                {media.map((val,index) =>{
                  return(<>
            <div class="col-lg-4 col-6" ><div class="video-box">
            <img src="https://sensegoodinstruments.com/supportvideo/uploadvideoimage/1609138277_2073.jpg" class="img-fluid" alt="" />
            <a href={val.video} class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true">
            </a></div>
            <center>{val.name}</center>
            </div>   </> )})}   
            </div>
            <br/>
        </div>
    </section>

    
      {/* end of video gallery section */}


      {/* <section id="about">
      <div class="section-title">
            <h2>Frequently Asked Questions</h2>
        </div>
        <div class="container">
            <Faq
                data = {data}
                styles={styles}
                config={config}
            />
        </div>
      </section>     */}
      </>
  


  )
}

export default SupportCardview