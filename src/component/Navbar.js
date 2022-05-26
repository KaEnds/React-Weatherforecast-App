import React from 'react'
import '../style/Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom"
import Menu from './Menu.js';


function Navbar() {
  return (
    <div className='navbar-layout'>
      <dir className='icon-group'>
        <div className="icon">
          <i class="bi bi-cloud-sun"style={{fontSize: "40px"}}></i>
        </div>
        <div className="logo">
          <h1><a href="/">Weather forecast</a></h1>
        </div>
      </dir>
    
    </div>
  )
}

export default Navbar
