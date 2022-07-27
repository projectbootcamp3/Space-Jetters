const mongoose = require('mongoose');
require('dotenv').config();


const uri = process.env.MONGODB_URI || 'mongodb://localhost/space-jetters'
console.log('Connection.js MONGODB_URI:', uri)


mongoose.connect(uri, {
  useNewUrlParser: true,
  // useFindAndModify: false,
  // useUnifiedTopology: true
});

module.exports = mongoose.connection;