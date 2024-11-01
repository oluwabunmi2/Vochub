// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Ensure this matches your use case
    default: 'user',
  },
}, {
  timestamps: true, // This adds createdAt and updatedAt timestamps
});

// Export the model
module.exports = mongoose.model('User', UserSchema);
