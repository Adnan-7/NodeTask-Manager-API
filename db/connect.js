const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://adnan:adnan44-27@nodeexpressproject.rrx9e.mongodb.net/task-manager?retryWrites=true&w=majority';

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
