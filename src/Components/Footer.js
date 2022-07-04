import React from 'react'
import "./Aboutus.css"
const Footer = () => {
  return (
    <>
<footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>Sensegood Instruments Private Limited</h3>
              <p>
                Gujarat, India <br/>

                <strong>Phone:</strong><a href="tel:+919714179358" style={{"color": "#ffffff"}}> +91 79 8484 8002</a><br/>
                <strong>Email:</strong> info@sensegoodinstruments.com<br/>
              </p>
              <div class="social-links mt-3">
                <a href="https://www.youtube.com/channel/UCtv4DiOC89iWeWblMSbaq6Q" class="youtube"><i class="bx bxl-youtube"></i></a>
                <a href="https://www.facebook.com/sensegoodinstruments" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="https://www.linkedin.com/company/sensegoodinstruments" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                <a href="https://twitter.com/sensegood4color" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="https://wa.me/917984848002?text=I%27m%20interested%20in%20Sensegood" class="whatsapp"><i class="bx bxl-whatsapp"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="index.php">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="support.php">Support</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="color-education-resources.php">Resources</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="product-accessories.php">Accessories</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="aboutus.php">About</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="contact.php">Contact Us</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Products</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="spectrophotometer.php">Sensegood Spectrophotometer</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="color-measurement/software.php">SensegoodSmart Utility</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="space-defence-electronics.php">Space and Defence</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Industries We Serve</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="color-measurement.php#features">Color Management </a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="space-defence-electronics.php">Space, Defence, Telecom, Industry 4.0</a></li>
            </ul>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        © <strong><span>Sensegood Instruments Private Limited</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer