// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    balance: { type: Number, default: 0 },
    commission: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
  });

/*const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking; */


module.exports = mongoose.model('Booking', bookingSchema);