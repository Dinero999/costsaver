import React, { useContext, useEffect } from 'react';
import './booking.css';
import level from '../assets/level.png';
//import level from '../assets/level.png';

import { useNavigate, useParams } from 'react-router-dom';
import { AccountContext } from './AccountContext';
import Sidebar from './Sidebar';

const Booking = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { initialBalance, commission, completed, tax, level, setUserId,isSubmitEnabled } = useContext(AccountContext);

  useEffect(() => {
    if (userId) {
      setUserId(userId);
    }
  }, [userId, setUserId]);

  const handleStart = () => {
    if (isSubmitEnabled) {
        navigate(`/dashboard/optimisation/${userId}/`);
      }
  };

  const accountBalance = initialBalance + commission;

  return (
    <>
      <div className='bookingContainer'>
        <div className="booking-container">
          <div className="header">
            <h1 className='booking-text'>Booking</h1>
          </div>
          <div className="level-container">
            <div className="level-icon">
               
            </div>
            <div className="level-info">
              <span>Current Level</span>
              <span>{level}</span>
            </div>
          </div>
          <div className="stats-container">
            <div className="stat-item">
              <i className="bi bi-wallet2 stat-icon"></i>
              <div className="stat-info">
                <span>Account balance</span>
                <span>USDT {accountBalance.toFixed(2)}</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="bi bi-bar-chart stat-icon"></i>
              <div className="stat-info">
                <span>Daily Bookings</span>
                <span>20</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="bi bi-cash stat-icon"></i>
              <div className="stat-info">
                <span>Commission</span>
                <span>USDT {commission}</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="bi bi-check2-all stat-icon"></i>
              <div className="stat-info">
                <span>Completed</span>
                <span>{completed}</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="bi bi-file-earmark-text stat-icon"></i>
              <div className="stat-info">
                <span>Tax</span>
                <span>USDT {tax}</span>
              </div>
            </div>
          </div>
          <button className="start-button" onClick={handleStart}  disabled={!isSubmitEnabled}>Start</button>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Booking;