import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">

    <NavLink className="nav-link active" to="/"><img src="https://sensegoodinstruments.com/assets/img/navbar.svg" style={{"width":"150px", "height":"50px"}} alt=""/></NavLink>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="main_nav">

<ul class="navbar-nav">
  
</ul>


<ul class="navbar-nav ml-auto">





<NavLink className="nav-link active" to="/Products">Products</NavLink>
<li class="nav-item">
<NavLink className="nav-link active" to="/Solutions">Solutions</NavLink>
</li>
<li class="nav-item"> <NavLink className="nav-link active" to="/Support">Support</NavLink></li>
<li class="nav-item"> <NavLink className="nav-link active" to="/Resources">Resources</NavLink> </li>
<li class="nav-item"> <NavLink className="nav-link active" to="/aboutus">About</NavLink></li><li class="nav-item"><a class="nav-link active" href="https://sensegoodinstruments.blogspot.com/" target="_blank"> Blog </a></li>
<li class="nav-item"> <NavLink className="nav-link active" to="/Contactus">Contact</NavLink></li>

</ul>

</div> 

</nav>

    </>
  )
}

export default Navbar


        {/* <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="index"> <img src={sg_logo} style = {{"width": "120px", "height":"100px"}}alt=""></img></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="main_nav">
<ul class="navbar-nav">
  
</ul>


<ul class="navbar-nav ml-auto">

<li class="nav-item">

</li>
<li class="nav-item"> <NavLink className="nav-link active" to="/Support">Support</NavLink></li>
<li class="nav-item"> <NavLink className="nav-link active" to="/">Resources</NavLink> </li>
<li class="nav-item"> <NavLink className="nav-link active" to="/"></NavLink> Accessories</li>
<li class="nav-item"> <NavLink className="nav-link active" to="/aboutus">About</NavLink></li>
<li class="nav-item"><a class="nav-link" href="https://sensegoodinstruments.blogspot.com/" target="_blank"> Blog </a></li>

</ul>
</div>

</nav> */}