import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { BiCopy } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Deposit.css';
//import Navbar from './SidebarDeposit';
import SidebarDeposit from './SidebarDeposit';

function Deposit() {
  const [transactionNumber, setTransactionNumber] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log('Transaction Number:', transactionNumber);
    console.log('Screenshot:', screenshot);
    // Add your deposit logic here
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copySuccess ? "Copied!" : "Copy to clipboard"}
    </Tooltip>
  );

  const handleCopy = () => {
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="deposit-container">
      <h1>Deposit</h1>
      <div className="wallet-address">
        <p>USDT (Network TRC-20):</p>
        <div className="address-container">
          <p>TJ4963hEkcqufcrcnxCS8QZw5ehX4GfVy7</p>
          <CopyToClipboard text="TJ4963hEkcqufcrcnxCS8QZw5ehX4GfVy7" onCopy={handleCopy}>
            <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
              <BiCopy className="copy-icon" />
            </OverlayTrigger>
          </CopyToClipboard>
        </div>
      </div>
      <div>
        <p className='line-breaker'></p>
      </div>
      <div className="wallet-address-eth">
        <p>Ethereum (Network ERC-20):</p> 
        <div className="address-container">
          <p className='eth-address'>0x9614e2e86a12dedcbaa0ba6a40f23997aa278774</p>
          <CopyToClipboard text="0x9614e2e86a12dedcbaa0ba6a40f23997aa278774" onCopy={handleCopy}>
            <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
              <BiCopy className="copy-icon" />
            </OverlayTrigger>
          </CopyToClipboard>
        </div>
      </div>
      <div className="input-container">
        <p>Recharge Screenshot upload</p>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button className="submit-button" onClick={handleSubmit}>Deposit</button>
      <SidebarDeposit />
    </div>
  );
}

export default Deposit;
