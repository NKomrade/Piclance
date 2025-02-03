const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sakshi:19nov2004@cluster0.zwwg7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
  }
};

module.exports = connectDB;