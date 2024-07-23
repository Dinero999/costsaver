import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout();
        navigate('/login');
      } catch (error) {
        console.error("Failed to log out: ", error);
      }
    };

    performLogout();
  }, [logout, navigate]);

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
