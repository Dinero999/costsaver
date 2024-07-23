import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './Booking';
import Optimisation from './Optimisation';
import './main.css';

const Main = () => {
  const [completed, setCompleted] = useState(0);
  const [commission, setCommission] = useState(0);

  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/booking" element={<Booking completed={completed} commission={commission} />} />
          <Route
            path="/optimisation"
            element={
              <Optimisation
                completed={completed}
                setCompleted={setCompleted}
                commission={commission}
                setCommission={setCommission}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
