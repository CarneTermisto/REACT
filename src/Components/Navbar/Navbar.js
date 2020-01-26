import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';
import {

    Link
  } from "react-router-dom";




function Navbar(){
    return (
        <nav>
          <ul>
            <li>
              <Link to="/NAVBAR">NAVBAR</Link>
            </li>
            <li>
              <Link to="/SERVICES">SERVICES</Link>
            </li>
            <li>
              <Link to="/ABOUT">ABOUT</Link>
            </li>
            <li>
              <Link to="/PROJECTS">PROJECTS</Link>
            </li>
            <li>
              <Link to="/CONTACT">CONTACT</Link>
            </li>
          </ul>
        </nav>
    )
};

export default Navbar;

