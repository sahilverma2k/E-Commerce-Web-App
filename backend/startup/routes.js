const express = require('express');
//add routes specific to project here 
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/auth', auth);
  app.use(error);
}