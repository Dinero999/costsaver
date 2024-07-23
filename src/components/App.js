import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Logout from "./Logout";
import './App.css';
//import Navbar from "./Navbar";
import Home from "./pages/Home";
import backgroundImage from "../assets/background.jpg";
import VideoComponent from "./VideoComponent";
import SlideshowComponent from "./SlideshowComponent";
import Footer from "./Footer";
import Booking from "./Booking";
import Recharge from "./Recharge";
import BankWithdrawal from "./Withdrawal";
import Deposit from "./Deposit";
import Loading from "./Loading";
import Optimisation from "./Optimisation";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AccountProvider } from "./AccountContext";
//import AdminDashboard from "./AdminDashboard";
import PreWithdrawal from "./PreWithdrawal";
import CardCheckout from "./CardCheckout";
//import Sidebar from "./Sidebar";
import Customer from "./customer-service.js";
 import UserDashboard from "./UserDashboard.js";
import logo from '../assets/logo.jpg'
import AdminDashboard from "./AdminDashboard";
//import SidebarAdmin from "./SidebarAdmin.js";
import TotalUser from "./TotalUser.js";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [commission, setCommission] = useState(0);
  const [initialBalance, setInitialBalance] = useState(0);

  

  const handleRouteChange = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate 2 seconds loading time
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const user = {
    profilePicture: {logo},
    referralCode: 'ABC123',
    accountBalance: 100.00,
    commissionBalance: 50.00
  };
  
  useEffect(() => {
    // Fetch user data here if needed
  }, []);

  return (
    <div
      className="app-background"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
        
          <Router>
            <AuthProvider>
              <AccountProvider>
                
                {isLoading && <Loading />} {/* Render loading component if isLoading is true */}
                
                <Routes>
                  <Route 
                    path="/dashboard/:userId/booking" 
                    element={
                      <PrivateRoute>
                        <Booking 
                          completed={completed} 
                          commission={commission} 
                          initialBalance={initialBalance} 
                        />
                      </PrivateRoute>
                    } 
                  />
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  
                  <Route path="/dashboard/:userId/customer-service" element={<Customer />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
                  <Route path="/dashboard/:userId" element={<Dashboard />} />
                  <Route path="/dashboard/:userId/recharge" element={<PrivateRoute><Recharge /></PrivateRoute>} />
                  <Route path="withdrawal" element={<PrivateRoute><BankWithdrawal /></PrivateRoute>} />
                  <Route path="/dashboard/:userId/PreWithdrawal" element={<PrivateRoute><PreWithdrawal /></PrivateRoute>} />
                  <Route path="/CardCheckout" element={<PrivateRoute><CardCheckout /></PrivateRoute>} />
                  <Route path="/dashboard/:userId/deposit" element={<PrivateRoute><Deposit /></PrivateRoute>} />
                  <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                  <Route path='/user-dashboard/:userId' element={<UserDashboard />} />
                  <Route path='/admin/total-users' element={<TotalUser />} />
                  
                  
                  <Route 
                    path="/dashboard/optimisation/:userId/" 
                    element={
                      <PrivateRoute>
                        <Optimisation 
                          completed={completed} 
                          setCompleted={setCompleted} 
                          commission={commission} 
                          setCommission={setCommission} 
                        />
                      </PrivateRoute>
                    } 
                  />
                   
                </Routes>
                <VideoComponent />
                <SlideshowComponent />
                <Footer />
                
              </AccountProvider>
            </AuthProvider>
          </Router>
          
        </div>
      </Container>  
      
    </div>
  );
}

export default App;
