import axios from 'axios';

const createOrder = async (email, phone) => {
  try {
    const response = await axios.post('http://localhost:5000/api/orders', {
      email,
      phone,
    });
    return response.data.orderNumber; // Return the generated order number
  } catch (error) {
    console.error('Error creating order:', error);
    return null;
  }
};

export default createOrder;