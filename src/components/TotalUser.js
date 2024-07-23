// src/components/TotalUser.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './TotalUser.css';
import { AccountContext } from './AccountContext';

const TotalUser = () => {
  const { setInitialBalance, setCommission, setTax, userId, setUserId } = useContext(AccountContext);
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [newBalance, setNewBalance] = useState('');
  const [newCommission, setNewCommission] = useState('');
  const [newTax, setNewTax] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleEditClick = (user) => {
    setEditUserId(user._id);
    setNewBalance(user.balance);
    setNewCommission(user.commission);
    setNewTax(user.tax);
  };

  const handleUpdateUser = async (userId) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}`, {
        balance: newBalance,
        commission: newCommission,
        tax: newTax
      });

      setUsers(users.map(user => user._id === userId ? { ...user, balance: newBalance, commission: newCommission, tax: newTax } : user));
      setEditUserId(null);

      // Update context with new values if the current user is the one being edited
      if (userId === userId) {
        setInitialBalance(newBalance);
        setCommission(newCommission);
        setTax(newTax);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className='total-user-container'>
      <h1>Total Registered Users</h1>
      <table className='user-table'>
        <thead>
          <tr>
            <th>Email</th>
            <th>UID</th>
            <th>Balance</th>
            <th>Commission</th>
            <th>Tax</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.uid}</td>
              <td>
                {editUserId === user._id ? (
                  <input
                    type="number"
                    value={newBalance}
                    onChange={(e) => setNewBalance(e.target.value)}
                  />
                ) : (
                  user.balance
                )}
              </td>
              <td>
                {editUserId === user._id ? (
                  <input
                    type="number"
                    value={newCommission}
                    onChange={(e) => setNewCommission(e.target.value)}
                  />
                ) : (
                  user.commission
                )}
              </td>
              <td>
                {editUserId === user._id ? (
                  <input
                    type="number"
                    value={newTax}
                    onChange={(e) => setNewTax(e.target.value)}
                  />
                ) : (
                  user.tax
                )}
              </td>
              <td>
                {editUserId === user._id ? (
                  <button onClick={() => handleUpdateUser(user._id)}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(user)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TotalUser;