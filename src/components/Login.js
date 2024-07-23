// Login.js
import React, { useRef, useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";
import './Login.css';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { AccountContext } from './AccountContext';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      console.log("Logging in...");
      const result = await login(emailRef.current.value, passwordRef.current.value);
      const user = result.user;

      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      let userData;
      if (!userDocSnap.exists()) {
        // Create the user document with default values
        userData = {
          email: user.email,
          balance: 0,
          commission: 0,
          tax: 0,
          level: 1,
          completed: 0,
        };
        await setDoc(userDocRef, userData);
        console.log("User document created with default values.");
      } else {
        userData = userDocSnap.data();
        if (!userData.balance) userData.balance = 0;
        if (!userData.commission) userData.commission = 0;
        if (!userData.tax) userData.tax = 0;
        if (!userData.level) userData.level = 1;
        if (!userData.completed) userData.completed = 0;

        await setDoc(userDocRef, userData, { merge: true });
        console.log("User document exists, updated with new values.");
      }

      // Update AccountContext with user data
      setUser(user.uid, userData.balance, userData.commission, userData.tax, userData.level);

      // Set up the user-specific submitState document in Firestore
      const submitStateRef = doc(db, 'users', user.uid, 'settings', 'submitState');
      const submitStateSnap = await getDoc(submitStateRef);

      if (!submitStateSnap.exists()) {
        // If the document doesn't exist, create it with a default value
        await setDoc(submitStateRef, { isSubmitEnabled: false });
        console.log("user-specific submitState document created with default value.");
      } else {
        console.log("user-specific submitState document already exists.");
      }

      navigate(`/dashboard/${user.uid}`);
    } catch (error) {
      console.error("Failed to log in or update Firestore:", error);
      setError("Failed to log in: " + error.message);
    }

    setLoading(false);
  }

  return (
    <div className="d-flex align-items-center justify-content-center"
         style={{ minHeight: "100vh", backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card className="bg-transparent text-white">
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100 bg-black white" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2 text-white">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}