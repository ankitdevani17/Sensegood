import React from "react";
import { useNavigate } from 'react-router-dom';
const ResourceCard = (props) => {
const Navigate = useNavigate();
const seemore = () =>{
Navigate(`/resources/detail/${props.id}`)
console.log("workin")
}
  return (
        <div className="col-md-4">
          <a href="usb-charger-adaptor.php"/>
          <div className="product-listing">
          <br/>
            <center>
              <img src={props.img} width ="100" height = "100" onClick ={seemore}/>
              <br/>
              <br/>
            <h5>{props.name}</h5> 
            </center>
          </div>
          
        </div>
  );
};

export default ResourceCard;