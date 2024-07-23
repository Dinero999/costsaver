import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PreWithdrawal.css'
import SidebarPreWithdrawal from './SidebarPreWithdrawal'

const PreWithdrawal = () => {

    const navigate = useNavigate();

    const handleBank = () => {
        navigate('/withdrawal');
      };
    const handleCard = () => {
        navigate('/CardCheckout');
      };

    
  return (
   
    <div className='container'>
        
        <div className='check-out'> 
        <SidebarPreWithdrawal />
            <h1 className='header'>Withdrawal Checkout</h1>
             <div className='credit-card'>
                <p>For Instant Withdrawal(Credit Cards)</p>
                <button className='credit-btn' onClick={handleCard}>Submit</button>
             </div>

             <div className='bank'>
                <p>For  Withdrawal in 3 days(Bank)</p>
                <button className='credit-btn'  onClick={handleBank}>Submit</button>
             </div>
        </div>
       
    </div>
  )
}

export default PreWithdrawal