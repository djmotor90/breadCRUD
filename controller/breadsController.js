const express  = require('express');
const breads   = express.Router();
// Load in Data
const breadDataArray = require('../models/bread.js');

// Static Routes
breads.get('/', (request, response) => 
{
  response.send(breadDataArray)
});

//Dynamic Routes
// SHOW
breads.get('/:arrayIndex', (request, response) => 
{
    
    response.send(breadDataArray[req.params.arrayIndex])
});
  



module.exports = breads;
