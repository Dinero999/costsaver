import React, { useState, useEffect, useContext } from 'react';
import SidebarOpt from './SidebarOpt';
import './optimisation.css';
import FullScreenLoading from './FullScreenLoading';
import image1 from '../assets/image15.jpg';
import image2 from '../assets/image16.jpg';
import image3 from '../assets/image17.jpg';
import image4 from '../assets/image18.jpg';
import image5 from '../assets/image19.jpg';
import image6 from '../assets/image20.jpg';
import image7 from '../assets/image21.jpg';
import image8 from '../assets/image22.jpg';
import image9 from '../assets/image23.jpg';
import image10 from '../assets/image24.jpg';
import image11 from '../assets/image25.jpg';
import image12 from '../assets/image26.jpg';
import image13 from '../assets/image27.jpg';
import image14 from '../assets/image28.jpg';
import image15 from '../assets/image29.jpg';
import image16 from '../assets/image30.jpg';
import image17 from '../assets/image31.jpg';
import image18 from '../assets/image32.jpg';
import image19 from '../assets/image33.jpg';
import image20 from '../assets/image34.jpg';
import { AccountContext } from './AccountContext';

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20
];

const Optimisation = () => {
  const { userId,completed, setCompleted, commission, setCommission,initialBalance, setInitialBalance,tax,level,setTax, setLevel,updateFirestore } = useContext(AccountContext);
  const [loading, setLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const savedCurrentImageIndex = localStorage.getItem('currentImageIndex');
    if (savedCurrentImageIndex) setCurrentImageIndex(Number(savedCurrentImageIndex));
  }, []);

  useEffect(() => {
    localStorage.setItem('currentImageIndex', currentImageIndex);
  }, [currentImageIndex]);

  const handleSubmit = () => {
    if (completed < 20) {
      setLoading(true);
      setTimeout(() => {
        const newCompleted = completed + 1;
        const newCommission = commission + 10;
        const newBalance = initialBalance + 10;
        const newTax = tax;
        setLoading(false);
        setCurrentImageIndex((currentImageIndex + 1) % images.length);

            // Update the state
        setCompleted(newCompleted);
        setCommission(newCommission);
        setInitialBalance(newBalance);
        setTax(newTax);

      }, 5000);
    }

    /*updateFirestore({
        completed: completed + 1,
        commission: commission + 10,
        balance: initialBalance + 10,
        tax: tax ,
        level: level, // Assuming level doesn't change in this example
      });
      */
  };



  return (
    <div className='optimisation-container'>
      {loading && <FullScreenLoading />}
      <div className="record-header">
        <h1>Tasks</h1>
        <span>20 tasks</span>
      </div>
      <div className="record-item">
        <img src={images[currentImageIndex]} alt="Record" className="record-image" />
        <button className="submit-button" onClick={handleSubmit} disabled={loading}>
          Submit
        </button>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <span>Completed</span>
          <span>{completed}</span>
        </div>
        <div className="stat-item">
          <span>Commission</span>
          <span>USDT {commission}</span>
        </div>
      </div>
      <SidebarOpt />
    </div>
  );
};

export default Optimisation;