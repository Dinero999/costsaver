import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Recharge.css';
import { AccountContext } from './AccountContext';
import SidebarRecharge from './SidebarRecharge';
//import Sidebar from './Sidebar';

function Recharge() {
  const { initialBalance, setInitialBalance } = useContext(AccountContext);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const handleRecharge = (value) => {
    setAmount(value);
  };

  const handleSubmit = () => {
    const newBalance = initialBalance + parseInt(amount);
    setInitialBalance(newBalance);
    navigate('/deposit');
  };

  return (
    <div className="recharge-container">
     
      <h1>Recharge</h1>
      <p>Wallet Balance</p>
      <h2>USDT {initialBalance.toFixed(2)}</h2>
      <p>Recharge Amount</p>
      <div className="amount-options">
        <button className="amount-option" onClick={() => handleRecharge(200)}>USDT 200</button>
        <button className="amount-option" onClick={() => handleRecharge(300)}>USDT 300</button>
        <button className="amount-option" onClick={() => handleRecharge(500)}>USDT 500</button>
      </div>
      <div className="custom-amount">
        <p>Amount</p>
        <div className="amount-input">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>USDT {amount}.00</span>
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    <SidebarRecharge />
    </div>
    

  );
}

export default Recharge;
