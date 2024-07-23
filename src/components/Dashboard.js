import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Dashboard.css';
import Agent from './Agent';
import Terms from './Terms';
import FAQs from './FAQs';
import About from './About';
import Sidebar from './Sidebar';

function Dashboard() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
        setUserData({
          totalBalance: response.data.balance,
          totalCommission: response.data.commission,
          totalUsers: response.data.totalUsers,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (!userId) {
      console.error('No user ID found!');
      return;
    }

    fetchUserData();
  }, [userId]);

  const handleStart = () => {
    navigate(`/dashboard/${userId}/optimisation`);
  };

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/dashboard/${userId}${path}`);
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        {/* Add any header content here */}
      </div>
      <div className="dash-container">
        <h1> COST SAVER </h1>
        <p> Value tours without compromise</p>
      </div>
      <div className="menu-container">
        <div className="menu-item" onClick={() => handleNavigation('/booking')}>
          <i className="bi bi-compass"></i>
          <p>Booking</p>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/recharge')}>
          <i className="bi bi-wallet2"></i>
          <p>Recharge</p>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/prewithdrawal')}>
          <i className="bi bi-cash"></i>
          <p>Withdrawal</p>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/customer-service')}>
          <i className="bi bi-people"></i>
          <p>Customer Service</p>
        </div>
        <Terms />
        <Agent />
        <FAQs />
        <About />
      </div>
      <Sidebar />
    </div>
  );
}

export default Dashboard;
