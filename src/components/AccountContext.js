import React, { createContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc,onSnapshot  } from 'firebase/firestore';
import { db } from '../firebase';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [initialBalance, setInitialBalance] = useState(0);
  const [commission, setCommission] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [tax, setTax] = useState(0);
  const [level, setLevel] = useState(1);
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false); // Ensure default state is false


  const fetchUserData = async (userId) => {
    try {
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        updateAccount(data);
      } else {
        console.error('No such document!');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  
  const fetchSubmitState = async () => {
    try {
      const docRef = doc(db, 'settings', 'submitState');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setIsSubmitEnabled(docSnap.data().isSubmitEnabled);
      } else {
        console.error('Submit state doc does not exist!');
      }
    } catch (error) {
      console.error('Error fetching submit state:', error);
    }
  };

  const updateFirestore = async (newData) => {
    if (!userId) return;

    try {
      const docRef = doc(db, 'users', userId);
      await setDoc(docRef, newData, { merge: true });
    } catch (error) {
      console.error('Error updating Firestore:', error);
    }
  };

  const updateAccount = (data) => {
    setInitialBalance(data.balance || 0);
    setCommission(data.commission || 0);
    setCompleted(data.completed || 0);
    setTax(data.tax || 0);
    setLevel(data.level || 1);
  };

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
      fetchSubmitState(userId); // Fetch submit state for the specific user
    }
  }, [userId]);

  // Listen to real-time updates for submit state
  useEffect(() => {
    if (userId) {
      const unsubscribe = onSnapshot(doc(db, 'users', userId, 'settings', 'submitState'), (doc) => {
        if (doc.exists()) {
          setIsSubmitEnabled(doc.data().isSubmitEnabled);
        }
      });

      return () => unsubscribe();
    }
  }, [userId]);
  const contextValue = {
    initialBalance,
    setInitialBalance: (balance) => {
      setInitialBalance(balance);
      updateFirestore({ balance });
    },
    commission,
    setCommission: (commission) => {
      setCommission(commission);
      updateFirestore({ commission });
    },
    tax,
    setTax: (tax) => {
      setTax(tax);
      updateFirestore({ tax });
    },
    level,
    setLevel: (level) => {
      setLevel(level);
      updateFirestore({ level });
    },
    completed,
    setCompleted: (completed) => {
      setCompleted(completed);
      updateFirestore({ completed });
    },
    userId,
    setUserId,
    setUser: (id, balance, commission, tax, level, completed) => {
      setUserId(id);
      updateAccount({ balance, commission, tax, level, completed });
    },
    email,
    setEmail,
    updateAccount,
    isSubmitEnabled, // Expose the state
  };

  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
};