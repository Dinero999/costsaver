import React from 'react';
//import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
//import Navbar from './Navbar';



function HeroSection() {
  return (
   
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1> COST SAVER </h1>
      <p> Value tours without compromise</p>
      <div className='hero-btns'>
     

       <Link to='/signup' className='btn custom-btn'>
          Sign Up
        </Link>
       

        <Link to="/login" className='btn custom-btn-login'>
          Login
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
