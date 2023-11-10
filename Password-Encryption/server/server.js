const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const encryptRoute = require('./routes/encrypt');
const decryptRoute = require('./routes/decrypt');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/encrypt', encryptRoute);
app.use('/api/decrypt', decryptRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/passwordEncrypter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});