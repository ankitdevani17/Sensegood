import React from 'react'
import './Contactus.css'
const Contactus = () => {
  return (
    <>
    <div className="container-contact">
        <h1>Contact Us</h1>
        <hr></hr>
        <h2 className ="h2-contact">Have any questions? We'd love to hear from you</h2>
        <div class="contact-items">
            <div class="customer-care">
                <h3>Customer Care</h3>
                <p>Our Support team is spread all over the world to give you fast response</p>
               <button className ="button-contact" id="cust-care"> Submit a Request</button>
                <a href="#"> Frequently asked Questions</a>
            </div>
            <div class="write-us">
                <h3>Write Us</h3>
                <p> You can write us if you have any queries</p>
               <a href="#"><button className ="button-contact" id="write">Write</button></a>
          <a href="./contact-form.html"><button className ="button-contact" id="write">Write</button></a>  
            </div>
            <div class="sales-market">
                <h3> Sales and Marketing</h3>
                <p>Get in touch with our sales and marketing team</p>
               <button className ="button-contact" id="sales">Contact Sales</button>
                <a href="#">View Plans</a>

            </div>
        </div>
        
    </div>
    </>
  )
}

export default Contactus