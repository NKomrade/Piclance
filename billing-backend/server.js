const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Customer = require('./models/Customer');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Generate customer identifier
const generateCustomerIdentifier = (email, phone) => {
  const emailPart = email.slice(0, 3).toUpperCase();
  const phonePart = phone.slice(-2);
  return `${emailPart}${phonePart}`;
};

// Create a new customer or fetch existing one
app.post('/api/orders', async (req, res) => {
  try {
    const { email, phone } = req.body;

    // Find or create the customer
    let customer = await Customer.findOne({ email });
    if (!customer) {
      const customerIdentifier = generateCustomerIdentifier(email, phone);
      customer = new Customer({
        email,
        phone,
        customerId: customerIdentifier,
        orderCount: 0,
      });
      await customer.save();
    }

    // Generate order number
    const orderNumber = `PL/${customer.customerId}/${customer.orderCount + 1}`;

    // Update the customer's order count
    customer.orderCount += 1;
    await customer.save();

    // Return the order number
    res.status(200).json({ orderNumber });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));