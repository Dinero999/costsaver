import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newBalance, setNewBalance] = useState(0);
  const [newCommission, setNewCommission] = useState(0);
  const [newTax, setNewTax] = useState(0);

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

  const handleUpdateUser = async () => {
    if (selectedUser) {
      try {
        const response = await axios.put(`http://localhost:5000/api/bookings/${selectedUser._id}`, {
          balance: newBalance,
          commission: newCommission,
          tax: newTax,
        });
        console.log('Booking updated:', response.data);
      } catch (error) {
        console.error('Error updating booking:', error);
      }
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // Fetch the current booking data for the selected user
    axios.get(`http://localhost:5000/api/bookings/${user._id}`)
      .then(response => {
        const { balance, commission, tax } = response.data;
        setNewBalance(balance);
        setNewCommission(commission);
        setNewTax(tax);
      })
      .catch(error => console.error('Error fetching booking data:', error));
  };

  return (
    <div className='admin-container'>
      <h1 className='admin-header'>Admin Dashboard</h1>
      <button onClick={() => navigate('/admin/total-users')}>View Total Users</button>
      <div className='features'>
        {/* Your other feature components */}
      </div>
    
      {selectedUser && (
        <div className='user-details'>
          <h3>Update Booking for: {selectedUser.email}</h3>
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
          <div>
            <label>Tax:</label>
            <input
              type='number'
              value={newTax}
              onChange={e => setNewTax(Number(e.target.value))}
            />
          </div>
          <button onClick={handleUpdateUser}>Update</button>
        </div>
      )}
      <div className='user-list'>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user._id} onClick={() => handleUserClick(user)}>
              {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
