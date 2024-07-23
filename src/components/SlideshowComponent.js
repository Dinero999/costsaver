import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SlideshowComponent.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';



const SlideshowComponent = () => {
  return (
    <div className="slideshow-container container">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section>
        <div className='adventures text-center'>
            <h1 className='d-block center m-lg-2'>Choose your Adventure</h1>
            <img src={image4} className='d-block w-100' alt='slide 4'></img>
        </div>

        <div className='trips center'>
            <div className='image-box'>
            <img src={image5} className='d-block w-100' alt='slide 5'></img>
            </div>

            <div className='image-box'>
            <img src={image6} className='d-block w-100' alt='slide 6'></img> 
            </div>

        </div>

        <div className='rafting text-center mt-4'>
            
            <img src={image7} className='d-block w-100' alt='slide 7'></img>
        </div>

        
      </section>

    </div>

    
  );
};

export default SlideshowComponent;
