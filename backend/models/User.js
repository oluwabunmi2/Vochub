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
    enum: ['admin', 'instructor', 'student'], // Valid values for the role field
    default: 'student', // Default value if not provided
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
