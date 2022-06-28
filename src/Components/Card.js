import React from "react";

const Cards = (props) => {
  return (
<main>
        <div className="col-md-4">
          <a href="usb-charger-adaptor.php"/>
          <div className="product-listing">
          <br/>
            <center>
              <img src={props.img} width ="100" height = "100"/>
            <h5>{props.name}</h5>
  
            </center>
          </div>
          
        </div>
</main>
  );
};

export default Cards;