import React from 'react'
import "./Aboutus.css"
const Footer = () => {
  return (
    <>

<div class="container my-5">


  <footer
          class=" text-lg-start text-white"
          style={{"backgroundColor": "#1c2331"}}
          >
   
    <section
             class="d-flex justify-content-between p-4"
             style={{"backgroundColor": "#6351ce"}}
             >
     
      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
   
      <div>
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-whatsapp"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-youtube"></a>
      <a href="#" class="fa fa-linkedin"></a>
      </div>
     
    </section>
  
    <section class="">
      <div class="container  text-md-start mt-5">
        <div class="row mt-3">
          
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
            <h6 class="text-uppercase fw-bold">Company name</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{"width": "60px" , "backgroundColor": "#7c4dff" , "height": "2px"}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
        
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{"width": "60px" , "backgroundColor": "#7c4dff" , "height": "2px"}}
                />
            <p>
              <a href="#!" class="text-white">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" class="text-white">MDWordPress</a>
            </p>
            <p>
              <a href="#!" class="text-white">BrandFlow</a>
            </p>
            <p>
              <a href="#!" class="text-white">Bootstrap Angular</a>
            </p>
          </div>
          
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{"width": "60px" , "backgroundColor": "#7c4dff" , "height": "2px"}}
                />
            <p>
              <a href="#!" class="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" class="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" class="text-white">Help</a>
            </p>
          </div>
    
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{"width": "60px" , "backgroundColor": "#7c4dff" , "height": "2px"}}
                />
            
            <p>Gujarat, India <br/>
            +91 79 8484 8002 <br/>
            info@sensegoodinstruments.com</p>
          </div>
     
        </div>
      
      </div>
    </section>
 
    <div
         class=" p-3"
         style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a>
        
    </div>
    
  </footer>

</div>

    </>
  )
}

export default Footer