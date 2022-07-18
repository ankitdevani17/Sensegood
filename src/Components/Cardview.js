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
    <div class="container" data-aos="zoom-in">
        <div class="section-title">
            <h2>USB Adaptor</h2>
        </div>

        <div class="row">
                <div class="col-md-8">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner" style={{"height":"100%"}}>
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger5.png" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger.png" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger3.png" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger4.png" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="https://sensegoodinstruments.com/assets/img/charger2.png" alt="Second slide"/>
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
                    <p>{fdata.description}</p>
                  
                        <center>
                        <button type="button" class="btn btn-primary">Buy Now</button>
                        </center>
                        <br/>
                        
                    </div>
                </div>
            </div>
            
    </div>
  </section>

  <section id="about" class="about">
        <div class="container">
            {/* <div class="section-title">
                <h2>Description</h2>
                <br/>
            </div>
            <p>{fdata.description}</p> */}

  <div class="section-title">
                <h2>About the Product</h2>
                <br/>
            </div>
            <div className='write-up' dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
  </section>

 {/* start of new */}

      <h2>About the Product</h2>
      <div className='write-up' dangerouslySetInnerHTML={{__html: html}}>
{/* {invoice()} */}
</div>
{/* {html} */}
      <br/>
      <br/>

{/* {writeup()} */}

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
                        <br/><br/>
                        <center>
                      Select Quantity (packs)<br/>
                      <input type="button" name="subtract" onclick="fivehunTotal(&quot;fhqty&quot;,-1,&quot;fhtotal&quot;,1911);Total();Adddata();Discount();checkzero();" value="-" style="font-weight: bold; color: #000000; padding:15px; border:2px solid #5596CB; background-color: white; margin: 0px; border-radius: 5px;">
                      <input type="text" name="qty" id="fhqty" readonly="true" value="0" style="color: #000000; padding:15px; border:2px solid #5596CB; background-color: #ffffff; width: 60px; text-align: center; margin: 0px; border-radius: 5px;">
                      <input type="button" name="add" onclick="fivehunTotal(&quot;fhqty&quot;,1,&quot;fhtotal&quot;,1911);Total();Adddata();Discount();checkzero();" value="+" style="font-weight: bold; color: #000000; padding:15px; border:2px solid #5596CB; background-color: white;  margin: 0px;border-radius: 5px;">
                      <br/>
                      Total<input type="text" name="total" id="fhtotal" value="0" style="color: #000000; padding:10px; border:none; background-color: #ffffff;  margin: 5px; text-align: left;border-radius: 5px; width: 75px;" readonly="true">Rs.
                      <br/>
                      
                    </center>
                    <br/>
                        <center>
                          
                            <a href="purchase.php" class="btn-explore">Buy Now</a>
                        </center>
                        <br/>
                        <p>Contact us for delivery outside India.</p>
                    </div>
                </div>
            </div> */}