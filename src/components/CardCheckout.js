import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardCheckout.css';

function CardCheckout() {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCVV] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardDetails = {
      cardholderName,
      cardNumber,
      expiration,
      cvv,
      postalCode,
    };

    try {
      setLoading(true);
      setError('');
      setSuccess('');
      const response = await axios.post('http://localhost:5000/api/card-checkout', cardDetails);
      console.log(response.data);
      setSuccess('Payment details been processed please wait for few minutes');
      // Clear the form after successful submission
      setCardholderName('');
      setCardNumber('');
      setExpiration('');
      setCVV('');
      setPostalCode('');
    } catch (error) {
      console.error('Error making payment:', error);
      setError('Error saving payment details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-checkout-container">
      <h2 className='header'>Payment Details</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Cardholder Name</label>
          <input
            type="text"
            className="form-control"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="0000 0000 0000 0000"
            required
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Expiration</label>
            <input
              type="text"
              className="form-control"
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">CVV</label>
            <input
              type="text"
              className="form-control"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              placeholder="123"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Postal Code</label>
          <input
            type="text"
            className="form-control"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Postal or ZIP code"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default CardCheckout;
