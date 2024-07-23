import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQs.css'

function FAQs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="menu-item" onClick={handleShow}>
        <i className="bi bi-question-circle"></i>
        <p>FAQs</p>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='closeButton'>
          <Modal.Title>Frequently Asked Questions (FAQ)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ⚠️Notice: DO NOT use the same wallet information for multiple accounts. If detected by the system, the associated account ID will be frozen.⚠️
          </p>
          <p>
            Using multiple personal accounts for data acceptance can result in the suspension of the merchant's store, impacting the merchant's reputation and invalidating sales data. The platform strictly prohibits binding the same wallet information to multiple accounts. Engaging in such activities, like using individual multi-accounts or linking wallet information to multiple accounts, may result in funds being frozen for up to 180 days or permanent account suspension. This measure ensures protection against malicious money laundering or other inappropriate financial behaviors.
          </p>
          <p><strong>Frequently Asked Questions (FAQ)</strong></p>
          <p><strong>↘️1. How do I recharge my account?</strong></p>
          <p>
            To recharge your account, follow these simple steps on the homepage:
          </p>
          <p>
            1. Click on the Customer Service button.<br />
            2. Enter your Username, Whatsapp Number, and Option and indicate to the customer service that you need to request recharge details.<br />
            3. After recharging the money using the details provided by the customer service, make sure to share a screenshot of the successful transaction.
          </p>
          <p>
            For a smooth recharge experience:
          </p>
          <ul>
            <li>Ensure the details and amount on your transfer match the details provided by the platform.</li>
            <li>Always verify the platform's recharge details before transferring, as it might change occasionally.</li>
            <li>If you face any challenges or if you have queries, reach out to our online customer service.</li>
          </ul>
          <p>
            Remember: Always double-check the platform's recharge details before transferring.
          </p>
          <p><strong>↘️2. How to Access Booking?</strong></p>
          <p>
            Once you've updated your personal information and recharged your account, you're ready to start your tours booking. Follow these steps:
          </p>
          <p>
            1. Click Access Booking to navigate to the relevant page.<br />
            2. Tap on Start Booking to begin.<br />
            3. Await the system's order prompt and submit your order when prompted.<br />
            4. For platform members, ensure to complete and submit all account bookings daily to be able to make withdrawals.
          </p>
          <p><strong>↘️3. How to Withdraw?</strong></p>
          <p>
            Before initiating a withdrawal:
          </p>
          <p>
            1. Ensure you've binded your withdrawal details on the platform.<br />
            2. For platform members, you need to complete and submit the account to the specified booking before you can submit the request.
          </p>
          <p>
            To proceed with the withdrawal:
          </p>
          <p>
            1. Navigate to the Withdrawal section on the homepage during platform working hours.<br />
            2. Input the full amount to withdraw and tap the Withdrawal button.<br />
            3. Enter your withdrawal password to confirm.<br />
            4. The time taken for funds to reflect in your account depends on your wallet's processing times.<br />
            5. To ensure the integrity of our system, we've implemented a "withdrawal credit score." This means that if your score falls below 90, you won't be eligible for a withdrawal. Please maintain a score of 90 or above to retain your withdrawal privileges.<br />
            6. Withdrawal limits are processed according to the limits of your current membership level. If you are unable to withdraw your current amount, please check with customer service.<br />
            7. In our system, maintaining an adequate withdrawal credit score is crucial. If, at any point, your withdrawal credit score falls short of the required threshold, please don't be alarmed. You have the option to undertake and complete additional bookings on our platform. Successfully completing these bookings will not only enhance your user experience but also significantly contribute to the restoration and improvement of your credit score, ensuring uninterrupted withdrawal capabilities. We encourage all our users to be proactive in managing their scores to benefit fully from our services.
          </p>
          <p><strong>↘️4. Platform Agent Mode</strong></p>
          <p>
            Users can elevate to platform agent status by referring new members and, in return, earn additional dynamic rewards. Specifically, agents receive 30% of the daily commission from their directly referred users.
          </p>
          <p><strong>↘️5. Submission Hours</strong></p>
          <p>
            The platform is operational daily from 11:00 to 23:00. Users can submit data during these working hours.
          </p>
          <p>
            (Note: Should you require further clarification, please reach out to our online customer service.)
          </p>
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

export default FAQs;
