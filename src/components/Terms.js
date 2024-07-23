import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Terms.css'

function Terms() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="menu-item" onClick={handleShow}>
        <i className="bi bi-file-earmark-text"></i>
        <p>T&C</p>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='closeButton'>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
RULES DESCRIPTION<br/>
1. All booking must be completed prior to withdrawals or account resets.<br/>
2. The system undergoes an automatic reset between 11 am and 12 pm. Ensure you withdraw all your balances and complete your account setup during this time.<br/>
3. One phone number is limited to one account registration.<br/>
4. Avoid binding the same wallet address to multiple accounts for platform. Accounts found doing this will be frozen.<br/>
5. Safeguard your account and withdrawal passwords. The platform isn't liable for losses due to disclosure.<br/>
6. Booking bonus (5% commissions) are allocated randomly. Once a deal is system-accepted, changes, cancellations, or abandonments aren't permitted.<br/>
7. Misuse of accounts may result in legal action.<br/>
8. Confirm the payment address with customer service before recharge.<br/>
9. The platform is not responsible for recharges to the wrong payment address, or recharges to the wrong payment address due to its own problems.<br/>
10. A minimum balance of USDT 50 is required to initiate an booking deal. Ensure you have this amount before starting.<br/>
11. An booking deal should be completed within a day. If this isn't feasible, notify customer service promptly.<br/>
12. Bank withdrawal options are available only for Professional Tier.<br/>
Dear membership, please review our rules diligently. We appreciate your cooperation.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className='close-btn'>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Terms;
