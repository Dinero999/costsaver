import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBook, FaRegMoneyBillAlt, FaDonate, FaWallet, FaHeadset, FaLock } from 'react-icons/fa';
import { IoLogOut } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { Navbar, Nav } from 'react-bootstrap';
import defaultAvatar from '../assets/avatar.jpg';
import { AccountContext } from './AccountContext'; 
import './SidebarCustomer.css';

const SidebarCustomer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(defaultAvatar);
  const { tax } = useContext(AccountContext);
 const { initialBalance, commission, completed, userId, setUser } = useContext(AccountContext);
  const [userData, setUserData] = useState({
    totalBalance: initialBalance,
    totalCommission: commission,
    totalUsers: completed,
  });
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  // Calculate account balance
  const accountBalance = initialBalance + commission;


  return (
    <div className="sidebar-container">
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand onClick={toggleSidebar}>
          <FaBars className='hamburger-customer' />
        </Navbar.Brand>
      </Navbar>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="profile-section">
          <img src={profilePicture} alt="Profile" className="profile-pic-customer" />
          <h2 className="profile-name-customer">Username</h2>
          <p className="invitation-code-customer">Invitation code: BA7XLA</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '100%' }}></div>
          </div>
          <div className="balance-info-usdt">
            <p className='acc-usdt'>USDT {accountBalance.toFixed(2)}</p>
            <p className='com-usdt'>USDT {commission}</p>
            <p className='tax-usdt'>USDT {tax.toFixed(2)}</p>
          </div>
          <div className="balance-info">
            <p className='acc-info'>Account balance</p>
            <p className='com-info'>Commission</p>
            <p className='tax-info'>Tax</p>
          </div>
           
        </div>
        <Nav className="flex-column Nav-containers">
          <Nav.Link as={Link} to="/booking"><FaBook /> Booking <FaAngleRight className='right-angle-booking'/></Nav.Link>
          <Nav.Link as={Link} to="/dashboard/:userId/recharge"><FaRegMoneyBillAlt /> Recharge <FaAngleRight className='right-angle-recharge'/></Nav.Link>
          <Nav.Link as={Link} to="/dashboard/:userId/deposit"><FaDonate /> Deposit <FaAngleRight className='right-angle-deposit'/></Nav.Link>
          <Nav.Link as={Link} to="/dashboard/:userId/PreWithdrawal"><FaWallet /> Withdrawal <FaAngleRight className='right-angle-withdrawal'/></Nav.Link>
          <Nav.Link as={Link} to="/dashboard/:userId/customer-service"><FaHeadset /> Customer Service <FaAngleRight className='right-angle-customer'/></Nav.Link>
          <Nav.Link as={Link} to="/forgot-password"><FaLock /> Security <FaAngleRight className='right-angle-password'/></Nav.Link>
          <Nav.Link as={Link} to="/logout"><IoLogOut /> Logout <FaAngleRight className='right-angle-logout'/></Nav.Link>
        </Nav>
        <div className='side-footer'>
          <p>Copyright © 2024 CostSaver . All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarCustomer;
