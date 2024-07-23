import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavbarWithdraw';
import './BankWithdrawal.css';
import axios from 'axios';
import SidebarWithdrawal from './SidebarWithdrawal';

function BankWithdrawal() {
  const [fullName, setFullName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [ssn, setSSN] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!agreedToTerms) {
      alert('You must agree to the terms and conditions to proceed.');
      return;
    }

    const bankingDetails = {
      fullName,
      accountNumber,
      routingNumber,
      ssn,
      agreedToTerms,
    };

    console.log('Sending request to API with data:', bankingDetails); // Log request data

    try {
      const response = await axios.post('http://localhost:5000/api/bank-details', bankingDetails);
      console.log('Withdrawal details saved successfully', response.data); // Log success response
      setSuccessMessage('Your banking details is been processed, please wait for a while');
      setErrorMessage('');
    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data); // Log response error
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        console.error('Request error:', error.request); // Log request error
        setErrorMessage('Request error');
      } else {
        console.error('Error:', error.message); // Log other errors
        setErrorMessage('Error: ' + error.message);
      }
      setSuccessMessage('');
    }
  }

  return (
    <div className="bank-withdrawal-container">
      <h1 className='withdraw-header'> Withdrawal</h1>

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <p className='input-label'>Full Name</p>
          <input
            className='inputs'
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <p className='input-label'>Account Number</p>
          <input
           className='inputs'
            type="text"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <p className='input-label'>Routing Number</p>
          <input
            className='inputs'
            type="text"
            placeholder="Routing Number"
            value={routingNumber}
            onChange={(e) => setRoutingNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <p className='input-label'>SSN</p>
          <input
            className='inputs'
            type="text"
            placeholder="SSN"
            value={ssn}
            onChange={(e) => setSSN(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={() => setAgreedToTerms(!agreedToTerms)}
          />
          <label className='label'>I agree to the Terms and Conditions</label>
        </div>
        <button className="submit-button" type="submit">WITHDRAW</button>
      </form>
       
    </div>
  );
}

export default BankWithdrawal;
