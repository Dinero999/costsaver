// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://mongo:Hornypussy123@cluster0.jvj8rcp.mongodb.net/COSTSAVER', {
  // useNewUrlParser: true,    // Commented as it is deprecated
  // useUnifiedTopology: true, // Commented as it is deprecated
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Middleware to log requests (for debugging purposes)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});

// Routes
const userRouter = require('../routes/userRoutes');
const cardRouter = require('../routes/cardDetailsRoutes');
const withdrawalRouter = require('../routes/withdrawalRoutes'); // Your withdrawal route
const bankingRouter = require('../routes/bankingRoutes'); // New banking route

app.use('/api', userRouter);
app.use('/api', cardRouter);
app.use('/api', withdrawalRouter);
app.use('/api', bankingRouter); // New banking route

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
