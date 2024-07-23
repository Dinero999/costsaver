import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
import './Navbar.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
     
     
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container-fluid '>
          <Link to='/' className='navbar-brand' onClick={closeMobileMenu}>
            COST SAVER
            <i className='bi bi-typo3 ms-2' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            onClick={handleClick}
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className={`collapse navbar-collapse ${click ? 'show' : ''}`}>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
             
              
              <li className='nav-item d-lg-none'>
                <Link to='/recharge' className='nav-link' onClick={closeMobileMenu}>
                  Recharge
                </Link>
              </li>
              <li className='nav-item d-lg-none'>
                <Link to='/deposit' className='nav-link' onClick={closeMobileMenu}>
                  Deposit
                </Link>
              </li>
              <li className='nav-item d-lg-none'>
                <Link to='/logout' className='nav-link' onClick={closeMobileMenu}>
                  Log Out
                </Link>
              </li>

              
            </ul>
            {button && (
              <Link to='/signup' className='btn btn-outline-light ms-lg-2'>
                Log Out
              </Link>
            )}
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
