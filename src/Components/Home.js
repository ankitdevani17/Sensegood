import React from 'react'
import "./Home.css"
import Footer from "./Footer.js"
import video2 from "../images/video2.mp4"
import Navbar from "./Navbar.js"
const Home = () => {
  return (
    <>
    <Navbar/>
   
        {/* <section>
    <div class="container-fluid" style="padding-right:0px; padding-left:0px">
      <video style="width:100%;" id="background-video" autoplay="" muted="" loop="">
        <source src="assets/vid/video2.mp4"/>
      </video>
      <div class="overlay-text">
        <h2 class="animate__animated animate__fadeInDown">Get Empowered by Sensegood Instruments</h2>
        <p class="animate__animated animate__fadeInUp">Sensegood is partnering for success with those who dare to go beyond. Discover why there is no better time to buy a Sensegood instrument that brings a future of growth to your business, today.</p>
        <a href="#main" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
      </div>
    </div>
    </section> */}
    <section>
    <div class="container-fluid" style={{"padding-right":"0px", "padding-left":"0px"}}>
      <video style={{"width":"100%"}} id="background-video" autoplay="" muted="" loop="">
        <source src={video2}/>
      </video>
      <div class="overlay-text">
        <h2 class="animate__animated animate__fadeInDown">Get Empowered by Sensegood Instruments</h2>
        <p class="animate__animated animate__fadeInUp">Sensegood is partnering for success with those who dare to go beyond. Discover why there is no better time to buy a Sensegood instrument that brings a future of growth to your business, today.</p>
        {/* <a href="#main" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a> */}
      </div>
    </div>
  </section>
  
 

  <div class="container" data-aos="zoom-in">
        <div class="section-title">
          <h2>Why Us</h2>
        </div>
        <br/>
        <div class="row">
          <div class="col-md-4 col-4"><div class="whyuscontent"><center><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1607401221_9715.png" width="50%" alt=""/><br/><h4>Original Equipment Manufacturer</h4></center></div></div><div class="col-md-4 col-4"><div class="whyuscontent"><center><img src="https://sensegoodinstruments.com/indexusp/uploadusp/Patented%20Colorimeter%20Color%20Spectrophotometer%20Whiteness%20meter%20Yellowness%20meter%20tester.png" width="50%" alt=""/><br/><h4>Research Oriented Company</h4></center></div></div><div class="col-md-4 col-4"><div class="whyuscontent"><center><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768554_1325.png" width="50%" alt=""/><br/><h4>ISO Certified</h4></center></div></div><div class="col-md-4 col-4"><div class="whyuscontent"><center><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1607401298_9918.png" width="50%" alt=""/><br/><h4>IEEE Award</h4></center></div></div><div class="col-md-4 col-4"><div class="whyuscontent"><center><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768649_8804.png" width="50%" alt=""/><br/><h4>International Accreditation</h4></center></div></div><div class="col-md-4 col-4"><div class="whyuscontent"><center><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768681_5768.png" width="50%" alt=""/><br/><h4>EGAC Accreditation</h4></center></div></div><div class="col-md-4 col-4"><div class="whyuscontent"><center><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768709_1045.png" width="50%" alt=""/><br/><h4>Building Trust</h4></center></div></div><div class="col-md-4 col-4"><div class="whyuscontent"><center><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768870_4089.png" width="50%" alt=""/><br/><h4>World Wide Supply</h4></center></div></div><div class="col-md-4 col-4"><div class="whyuscontent"><center><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768893_9174.png" width="50%" alt=""/><br/><h4>Technology for All</h4></center></div></div>          
        </div>
      </div>
      <br/>

    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">
        <div class="row">
          <div class="col-lg-9 text-center/ text-lg-left">
            <h3>Connect</h3>
            <p> We have forged an important bond with our customers across the globe. Let’s get in touch. <br/>Phone, WhatsApp, Signal, Telegram:  +91 79 8484 8002 <br/>Please reach out to: info@sensegoodinstruments.com</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center/">
            <a class="cta-btn align-middle" href="contact.php">Contact</a>
          </div>
        </div>

      </div>
    </section>
  <Footer/>
    </>
  )
}

export default Home