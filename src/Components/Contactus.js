import React from 'react'
import './Aboutus.css'
const Contactus = () => {
  return (
    <>
      <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
      rel="stylesheet"
    />
      </head>
  <body>
    <div className="container-contact">
        <h1>Contact Us</h1>
        <hr></hr>
        <div className="row">
        <div class="col-md-4">
              <div class="info-box">
                <i class="bx bx-phone-call"></i>
                <h3>Sensegood Instruments Private Limited</h3>
                <p></p>Gujarat, India<p></p>
                <p><a href="tel:+919714179358" style="color:#444444">Phone, WhatsApp, Signal, Telegram:
<br/>+91 79 8484 8002
</a></p>
              </div>

              <div class="info-box">
                <i class="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p style="padding:0px 25px">For vendor/ partnerships/ inquiries, please reach out to</p>
                <p><a href="mailto:info@sensegoodinstruments.com">info@sensegoodinstruments.com</a></p>
                <br/><br/>
                <p style="padding:0px 25px">For servicing/ repairing/ calibration/ post-purchase support, please reach out to</p>
                <p><a href="mailto:support@sensegoodinstruments.com">support@sensegoodinstruments.com</a></p>

        </div>
        </div>
        </div>
    </div>
    </body>
    </>
  )
}

export default Contactus