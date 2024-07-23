import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AccountContext } from './AccountContext';

const UserDashboard = () => {
  const { userId } = useParams();
  const { setInitialBalance, setCommission } = useContext(AccountContext);
  const [userData, setUserData] = useState(null);
  const [newBalance, setNewBalance] = useState(0);
  const [newCommission, setNewCommission] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
        setUserData(response.data);
        setNewBalance(response.data.balance);
        setNewCommission(response.data.commission);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/users/${userId}`, {
        balance: newBalance,
        commission: newCommission,
      });
      setInitialBalance(newBalance);
      setCommission(newCommission);
      console.log('User updated:', response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      {userData ? (
        <>
          <h1>User Dashboard: {userData.email}</h1>
          <div>
            <label>Balance:</label>
            <input
              type='number'
              value={newBalance}
              onChange={e => setNewBalance(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Commission:</label>
            <input
              type='number'
              value={newCommission}
              onChange={e => setNewCommission(Number(e.target.value))}
            />
          </div>
          <button onClick={handleUpdateUser}>Update User</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDashboard;
