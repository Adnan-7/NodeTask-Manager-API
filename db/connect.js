const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://adnan:adnan44-27@nodeexpressproject.rrx9e.mongodb.net/task-manager?retryWrites=true&w=majority';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to the db'))
  .catch((err) => console.log(err));
