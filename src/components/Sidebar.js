import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaBook, FaRegMoneyBillAlt, FaDonate, FaWallet, FaHeadset, FaLock } from 'react-icons/fa';
import { IoLogOut } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { Navbar, Nav } from 'react-bootstrap';
import defaultAvatar from '../assets/avatar.jpg';
import { AccountContext } from './AccountContext'; 
import './Sidebar.css';

const Sidebar = () => { 
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(defaultAvatar);
  const { initialBalance, commission, tax, completed, level } = useContext(AccountContext);
  const [isOpen, setIsOpen] = useState(false);  // State to manage sidebar

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleNavigation = (path) => {
    navigate(`/dashboard${path}`);
  };

  const accountBalance = initialBalance + commission;

  return (
    <div className="sidebar-container">
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand onClick={() => setIsOpen(!isOpen)}>
          <FaBars className='hamburger-booking ' />
        </Navbar.Brand>
      </Navbar>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="profile-section">
          <img src={profilePicture} alt="Profile" className="profile-pic-booking" />
          <h2 className="profile-name-booking">Username</h2>
          <p className="invitation-code-booking">Invitation code: BA7XLA</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '100%' }}></div>
          </div>
          <div className="balance-info-usdt">
            <p className='acc-usdt'>USDT {accountBalance.toFixed(2)}</p>
            <p className='com-usdt'>USDT {commission.toFixed(2)}</p>
            <p className='tax-usdt'>USDT {tax}</p>
             
          </div>
          <div className="balance-info">
            <p className='acc-info'>Account balance</p>
            <p className='com-info'>Commission</p>
            <p className='tax-info'>Tax</p>
           
          </div>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleProfilePictureChange} 
            className="profile-pic-input"
          />
        </div>
        <Nav className="flex-column Nav-containers">
          <Nav.Link onClick={() => handleNavigation('/booking')}><FaBook /> Booking <FaAngleRight className='right-angle-booking'/></Nav.Link>
          <Nav.Link as={Link} to="/dashboard/:userId/recharge"><FaRegMoneyBillAlt /> Recharge <FaAngleRight className='right-angle-recharge'/></Nav.Link>
          <Nav.Link as={Link} to="/dashboard/:userId/deposit"><FaDonate /> Deposit <FaAngleRight className='right-angle-deposit'/></Nav.Link>
          <Nav.Link as={Link} to="/dashboard/:userId/PreWithdrawal"><FaWallet /> Withdrawal <FaAngleRight className='right-angle-withdrawal'/></Nav.Link>
          <Nav.Link as={Link} to="/dashboard/:userId/customer-service"><FaHeadset /> Customer Service <FaAngleRight className='right-angle-customer-service'/></Nav.Link>
          <Nav.Link as={Link} to="/"><FaLock /> Logout <IoLogOut className='right-angle-logout'/></Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;