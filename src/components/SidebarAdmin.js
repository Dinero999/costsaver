// src/components/Sidebar.js

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBook, FaRegMoneyBillAlt, FaDonate, FaWallet, FaHeadset, FaLock } from 'react-icons/fa';
import { IoLogOut } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { Navbar, Nav } from 'react-bootstrap';
import defaultAvatar from '../assets/avatar.jpg';
import { AccountContext } from './AccountContext';
import './SidebarAdmin.css';

const SidebarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(defaultAvatar);
  const { tax, totalUsers, activeUsers, totalWithdrawals } = useContext(AccountContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <div className="sidebar-container">
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand onClick={toggleSidebar}>
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
            <p className='acc-usdt'>USDT 20.00</p>
            <p className='com-usdt'>USDT 0</p>
            <p className='tax-usdt'>USDT {tax !== undefined ? tax.toFixed(2) : '0.00'}</p>
          </div>
          <div className="balance-info">
            <p className='acc-info'>Account balance</p>
            <p className='com-info'>Commission</p>
            <p className='tax-info'>Tax</p>
          </div>
          <div className="stats-section">
            <p className='total-users'>Total Users: {totalUsers}</p>
            <p className='active-users'>Active Users: {activeUsers}</p>
            <p className='total-withdrawals'>Total Withdrawals: USDT {totalWithdrawals.toFixed(2)}</p>
          </div>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleProfilePictureChange} 
            className="profile-pic-input"
          />
        </div>
        <Nav className="flex-column Nav-containers">
          <Nav.Link as={Link} to="/booking"><FaBook /> Booking <FaAngleRight className='right-angle-booking'/></Nav.Link>
          <Nav.Link as={Link} to="/recharge"><FaRegMoneyBillAlt /> Recharge <FaAngleRight className='right-angle-recharge'/></Nav.Link>
          <Nav.Link as={Link} to="/deposit"><FaDonate /> Deposit <FaAngleRight className='right-angle-deposit'/></Nav.Link>
          <Nav.Link as={Link} to="/PreWithdrawal"><FaWallet /> Withdrawal <FaAngleRight className='right-angle-withdrawal'/></Nav.Link>
          <Nav.Link as={Link} to="/customer-service"><FaHeadset /> Customer Service <FaAngleRight className='right-angle-customer'/></Nav.Link>
          <Nav.Link as={Link} to="/forgot-password"><FaLock /> Security <FaAngleRight className='right-angle-password'/></Nav.Link>
          <Nav.Link as={Link} to="/logout"><IoLogOut /> Logout <FaAngleRight className='right-angle-logout'/></Nav.Link>
        </Nav>
        <div className='side-footer'>
          <p>Copyright © 2024 CostSaver. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
