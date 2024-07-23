import React, {  useEffect,useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';
import logo from '../assets/logo.jpg'; // Adjust the path according to your project structure

function UserProfile({ isOpen, toggleMenu }) {
    const navigate = useNavigate();
    const menuRef = useRef(null);
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          toggleMenu();
        }
      }
  
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, toggleMenu]);

  const [isProfileOpen, setIsProfileOpen] = useState(false); 
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };


   

    return (
        <div ref={menuRef} className={`user-profile ${isOpen ? 'open' : ''}`}>
             <i className="bi bi-list hamburger-icon" onClick={toggleProfile}></i>
             <UserProfile isOpen={isProfileOpen} toggleMenu={toggleProfile} />
          <div className="profile-header">
            <img src={logo} alt="User Avatar" className="avatar" />
            <h2>Rodent</h2>
            <p>Invitation code: BA7XLA <i className="bi bi-clipboard copy-icon" onClick={() => navigator.clipboard.writeText('BA7XLA')}></i></p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="profile-balance">
            <p>Account Balance</p>
            <p>Commission</p>
            <p>USDT 20.00</p>
            <p>USDT 0</p>
            
          </div>
          <ul className="profile-links">
            <li onClick={() => { navigate('/booking-history'); toggleMenu(); }}>Booking History</li>
            <li onClick={() => { navigate('/recharge'); toggleMenu(); }}>Recharge</li>
            <li onClick={() => { navigate('/security'); toggleMenu(); }}>Security</li>
            <li onClick={() => { navigate('/customer-service'); toggleMenu(); }}>Customer Service</li>
            <li onClick={() => { navigate('/wallet-info'); toggleMenu(); }}>Wallet Info</li>
            <li className="logout" onClick={() => { navigate('/logout'); toggleMenu(); }}>Logout</li>
          </ul>
        </div>
      );
    }
    
    export default UserProfile;
