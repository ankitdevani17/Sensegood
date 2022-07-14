import React from 'react'
import "./Home.css"
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
        <a href="#main" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
      </div>
    </div>
  </section>
    <main id="main">
 


    <section id="whyus" class="whyus section-bg">
      <div class="container" data-aos="zoom-in">
        <div class="section-title">
          <h2>Why Us</h2>
        </div>
        <br/>
        <div class="row">
          <div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1607401221_9715.png" width="50%" alt=""/><br/><h4>Original Equipment Manufacturer</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/Patented%20Colorimeter%20Color%20Spectrophotometer%20Whiteness%20meter%20Yellowness%20meter%20tester.png" width="50%" alt=""/><br/><h4>Research Oriented Company</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768554_1325.png" width="50%" alt=""/><br/><h4>ISO Certified</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1607401298_9918.png" width="50%" alt=""/><br/><h4>IEEE Award</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768649_8804.png" width="50%" alt=""/><br/><h4>International Accreditation</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768681_5768.png" width="50%" alt=""/><br/><h4>EGAC Accreditation</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768709_1045.png" width="50%" alt=""/><br/><h4>Building Trust</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768870_4089.png" width="50%" alt=""/><br/><h4>World Wide Supply</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768893_9174.png" width="50%" alt=""/><br/><h4>Technology for All</h4><center/></div></div>          
        </div>
      </div>
    </section>

    {/* <section id="whyus" class="whyus section-bg">
      <div class="container" data-aos="zoom-in">
        <div class="section-title">
          <h2>Why Us</h2>
        </div>
        <br/>
        <div class="row">
          <div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1607401221_9715.png" width="50%" alt=""/><br/><h4>Original Equipment Manufacturer</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/Patented%20Colorimeter%20Color%20Spectrophotometer%20Whiteness%20meter%20Yellowness%20meter%20tester.png" width="50%" alt=""/><br/><h4>Research Oriented Company</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768554_1325.png" width="50%" alt=""/><br/><h4>ISO Certified</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1607401298_9918.png" width="50%" alt=""/><br/><h4>IEEE Award</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768649_8804.png" width="50%" alt=""/><br/><h4>International Accreditation</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768681_5768.png" width="50%" alt=""/><br/><h4>EGAC Accreditation</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768709_1045.png" width="50%" alt=""/><br/><h4>Building Trust</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768870_4089.png" width="50%" alt=""/><br/><h4>World Wide Supply</h4><center/></div></div><div class="col-md-4 col-6"><div class="whyuscontent"><center/><img src="https://sensegoodinstruments.com/indexusp/uploadusp/1605768893_9174.png" width="50%" alt=""/><br/><h4>Technology for All</h4><center/></div></div>          
        </div>
      </div>
    </section> */}

    {/* <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Testimonials</h2>
        </div>

        <div class="owl-carousel testimonials-carousel owl-loaded owl-drag">
                

      </div>
    </section> */}

    {/* <section id="clients" class="clients section-bg">
                    <div class="container-fluid" data-aos="zoom-in">
                      <div class="section-title">
                        <h2>Our Clients</h2>
                      </div>
                      <br/>
                      <div class="row justify-content-center/">
                      <div class="col-xl-10">
                      <div class="owl-carousel clients-carousel owl-loaded owl-drag"><div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-6110px, 0px, 0px); transition: all 0.25s ease 0s; width: 9299px;"><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/9%20magicrete%20India.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/10%20Pee%20Aar%20Industries%20Hotel%20Slippers%20India.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/11%20VicFame%20South%20Africa.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/12%20Richcore-resources%20Canada.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/13%20Chemtech%20Australia.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/OrthoRest.png" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/15%20FUHR%20RESEARCH%20LABORATORIES%20USA.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/16%20Solid%20Edge.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/17%20QC%20Toolbox%20Florida%20USA.png" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/1%20biggelaarkoffie%20Netherlands.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/2%20Aglow%20Multigrains%20India.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/3%20copacabana-coffee%20New%20Jersey%20USA.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/4%20APS%20Minerals%20India.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/5%20Hemera%20lights%20France.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/6%20Jindal%20Air%20India.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/7%20Herne%20Bay%20Roast%20UK.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/8%20kay-kay-printing-ink%20India.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/9%20magicrete%20India.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/10%20Pee%20Aar%20Industries%20Hotel%20Slippers%20India.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/11%20VicFame%20South%20Africa.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/12%20Richcore-resources%20Canada.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/13%20Chemtech%20Australia.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/OrthoRest.png" alt=""/></div><div class="owl-item active" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/15%20FUHR%20RESEARCH%20LABORATORIES%20USA.jpg" alt=""/></div><div class="owl-item active" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/16%20Solid%20Edge.jpg" alt=""/></div><div class="owl-item" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/17%20QC%20Toolbox%20Florida%20USA.png" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/1%20biggelaarkoffie%20Netherlands.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/2%20Aglow%20Multigrains%20India.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/3%20copacabana-coffee%20New%20Jersey%20USA.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/4%20APS%20Minerals%20India.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/5%20Hemera%20lights%20France.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/6%20Jindal%20Air%20India.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/7%20Herne%20Bay%20Roast%20UK.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/8%20kay-kay-printing-ink%20India.jpg" alt=""/></div><div class="owl-item cloned" style="width: 265.666px;"><img src="https://sensegoodinstruments.com/indexclients/uploadclientimage/9%20magicrete%20India.jpg" alt=""/></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button></div></div>
            </div>
            </div>
            </div>
            </section> */}
    <section id="clients" class="clients section-bg">
      <div class="container-fluid" data-aos="zoom-in">
        <div class="section-title">
          <h2>Our Clients</h2>
        </div>
        <br/>
        <div class="row justify-content-center/">
          <div class="col-xl-10">
            <div class="owl-carousel clients-carousel">
              <img src="https://sensegoodinstruments.com/assets/img/clients/client-1.png" alt=""/>
              <img src="https://sensegoodinstruments.com/assets/img/clients/client-2.png" alt=""/>
              <img src="https://sensegoodinstruments.com/assets/img/clients/client-3.png" alt=""/>
              <img src="https://sensegoodinstruments.com/assets/img/clients/client-4.png" alt=""/>
              <img src="https://sensegoodinstruments.com/assets/img/clients/client-5.png" alt=""/>
              <img src="https://sensegoodinstruments.com/assets/img/clients/client-6.png" alt=""/>
              <img src="https://sensegoodinstruments.com/assets/img/clients/client-7.png" alt=""/>
              <img src="https://sensegoodinstruments.com/assets/img/clients/client-8.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section> 
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
  </main>
    </>
  )
}

export default Home