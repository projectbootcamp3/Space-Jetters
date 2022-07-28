const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/space-jetters'
console.log('Connection.js 🍃🖇 MONGODB_URI:', uri)

mongoose.connect(uri, {
  useNewUrlParser: true,
  // useFindAndModify: false,
   useUnifiedTopology: true
});

module.exports = mongoose.connection;