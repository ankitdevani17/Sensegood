import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom'
const Cardview = () => {
        const {id}= useParams();
        const digit = parseInt(id)+1
        const [fdata,setdata] =useState([]);
        const [fmedia,setmedia] =useState();
        const [html,sethtml ] =useState('');
        const writeup = () =>{
          document.body.innerHTML+=html;
            } 
        async function getData() {
          const res = await axios.get(`/api/products/details/${digit}`,
          {mode:'cors'},{ withCredentials: true });
          console.log(res.data.product_media[0].image);
          setdata(res.data)
          console.log(res.data)
         setmedia(res.data.product_media)
          sethtml(res.data.writeup);
          }
        useEffect(() => { 
            getData();

          },[])
          if (fdata==undefined || fmedia == undefined || html == undefined) {
            return (
              <div>
                <h1>Loading...</h1>
              </div>
            );}

  return (
    <>  
  <section>
    <div className="container" data-aos="zoom-in">
        <div className="section-title">
            <h2>USB Adaptor</h2>
        </div>
        <div className="row">
                <div className="col-md-8">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner" style={{"height":"100%"}}>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={fmedia[1].image} alt="First slide"/>
                    </div>
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={fmedia[1].image} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger3.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger4.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger2.png" alt="Second slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                </div>
                <div class="col-md-4">
                    <div>
                        <h3>Purchase Information</h3>
                        Mentioned total price includes GST and shipping charges for delivery in India.
                        <br/><br/>
                        <center>
                      Select Quantity (packs)<br/>
                      
                      
                    </center>
                    <br/>
                        <center>
                          
                            <a href="purchase.php" class="btn-explore">Buy Now</a>
                        </center>
                        <br/>
                        <p>Contact us for delivery outside India.</p>
                    </div>
                </div>
            </div>

    </div>
  </section>
  <section>
    <div className="container">
      <h2>Description</h2>
      {fdata.description}
      image 

      <br/>
      <br/>
      {/* <ul> */}
        {/* <li>USB charger, 5watt, universal input: ~100V to 240V, 50/60 Hz, output: 5.0Vdc, 1000 mAmps (no fast charging).</li>
        <li>Automatic over voltage protection up to 350V</li>
        <li>Automatic over voltage protection up to 350V</li>
        <li>Certifications: RoHS Reach compliance, BIS, European compliance CE.</li>
        <li>Certified standards: Meet IEC60950-1, IS13252-2010 (information technology and similar electric apparatus -safety requirement)</li>
        <li>Tested average power efficiency: 5 star rating according to Energy Star Standard</li>
        <li>Performed reliability tests: Long Time Charging Test, Input Over-voltage Test, Temperature/Humidity Test, Salt Spray Test, Vibration test, Insertion force test, EMC requirement (test criteria: EN55024, EN61000-4) – EFD test, Surge test, ESD test</li>
        <li>Industry’s one of the best EMI/EMC compatible adapter with additional EM filter and RF suppressors, one of the lowest electromagnetic radiation, extremely low voltage fluctuations, extremely suppressed power line interference at 50/60Hz. It protects your device by eliminating high power RF signals getting coupled to your device’s trans-receiver. </li>
        <li>Eliminates high voltage surges in the output, niche electronics for supplying constant stable +5V.</li>
        <li>It has standard Indian plugs that fit appropriately in the sockets. It is Bureau of Indian Standards (BIS) certified.</li>
        <li>Small leakage current: &lt;250 micro Amp</li>
        <li>Insulation resistance &gt; 50Mega ohms @500VDC</li>
        <li>Operating altitude &lt; 2000 meters</li>
        <li>Small size, light weight</li>
      </ul> */}
      <h2>About the Product</h2>
      <div className='write-up' dangerouslySetInnerHTML={{__html: html}}>
{/* {invoice()} */}
</div>
{/* {html} */}
      <br/>
      <br/>
    </div>

{/* {writeup()} */}
  </section>

    </>

  )
}

export default Cardview

{/* <div class="row">
                <div class="col-md-8">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner" style="height:100%">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger5.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger3.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger4.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger2.png" alt="Second slide">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                  
                </div>
                <div class="col-md-4">
                    <div>
                        <h3>Purchase Information</h3>
                        Mentioned total price includes GST and shipping charges for delivery in India.
                        <br><br>
                        <center>
                      Select Quantity (packs)<br>
                      <input type="button" name="subtract" onclick="fivehunTotal(&quot;fhqty&quot;,-1,&quot;fhtotal&quot;,1911);Total();Adddata();Discount();checkzero();" value="-" style="font-weight: bold; color: #000000; padding:15px; border:2px solid #5596CB; background-color: white; margin: 0px; border-radius: 5px;">
                      <input type="text" name="qty" id="fhqty" readonly="true" value="0" style="color: #000000; padding:15px; border:2px solid #5596CB; background-color: #ffffff; width: 60px; text-align: center; margin: 0px; border-radius: 5px;">
                      <input type="button" name="add" onclick="fivehunTotal(&quot;fhqty&quot;,1,&quot;fhtotal&quot;,1911);Total();Adddata();Discount();checkzero();" value="+" style="font-weight: bold; color: #000000; padding:15px; border:2px solid #5596CB; background-color: white;  margin: 0px;border-radius: 5px;">
                      <br>
                      Total<input type="text" name="total" id="fhtotal" value="0" style="color: #000000; padding:10px; border:none; background-color: #ffffff;  margin: 5px; text-align: left;border-radius: 5px; width: 75px;" readonly="true">Rs.
                      <br>
                      
                    </center>
                    <br>
                        <center>
                          
                            <a href="purchase.php" class="btn-explore">Buy Now</a>
                        </center>
                        <br>
                        <p>Contact us for delivery outside India.</p>
                    </div>
                </div>
            </div> */}