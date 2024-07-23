import React from 'react'
import './Customer.css' 
import SidebarCustomer from './SidebarCustomer'

const Customer = () => {
    const handleTelegramRedirect = () => {
      console.log('Redirecting to Telegram...');
      window.location.href = 'https://t.me/Costsaverglobal';
    };
  
    return (
      <div>
        <div className='container'>
          <div className='msg-area'>
            <h3>Contact Us via Telegram </h3>
            <p>Customer Service Operation Time: 07:00 to 19:00</p>
          </div>
          <div className='btn'>
            <button 
              className='btn-tg' 
              onClick={() => {
                console.log('Button clicked');
                handleTelegramRedirect();
              }}
            >
              Direct to Telegram
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Customer;