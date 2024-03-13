import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';



export default function Navbar(props) {
    
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode.txt} bg-${props.mode.bg}` }>
    <div className="container-fluid mx-2 ">
      <Link className={`navbar-brand `} to="/">{props.title}</Link>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Learn">Home</Link>
        </li>
        </ul>
        

    <div class="form-check mx-1">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => props.toggleStyle('yellow')} />
    <label class={`form-check-label text-${props.mode.txt=="dark"?"light":"dark"}`}  for="flexRadioDefault1">
     Yellow mode
    </label>
    </div>
    <div class="form-check mx-1">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => props.toggleStyle('red')}  />
    <label class={`form-check-label text-${props.mode.txt=="dark"?"light":"dark"}`} for="flexRadioDefault2">
      Red Mode
  </label>
    </div>

    <div class="form-check mx-1">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  onClick={() => props.toggleStyle('blue')} />
    <label class={`form-check-label text-${props.mode.txt=="dark"?"light":"dark"}`} for="flexRadioDefault2">
      Blue Mode
  </label>
    </div>
    <div class="form-check mx-1">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => props.toggleStyle('green')} />
    <label class={`form-check-label text-${props.mode.txt=="dark"?"light":"dark"}` } for="flexRadioDefault2">
     Green Mode
  </label>
    </div>
   
    </div>


  </nav>
      
    
  )
}


Navbar.propTypes={
    title: PropTypes.string.isRequired,
    abouttext: PropTypes.string
}


Navbar.defaultProps = {
    title: 'add a title here'
  };