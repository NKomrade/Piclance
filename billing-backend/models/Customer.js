const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  customerId: { type: String, unique: true, required: true },
  orderCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Customer', customerSchema);