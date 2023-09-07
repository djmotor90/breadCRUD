const express  = require('express');
const breads   = express.Router();
// Load in Data
const breadDataArray = require('../models/bread.js');

// Static Routes
breads.get('/', (request, response) => 
{
    response.render('Index',
        {
            breadDataArray : breadDataArray,
            title          : 'Bread Inventory List'
        }
    )
});
breads.get('/error', (request, response) => 
{
  response.send('You have entered an invalid bread array value');
});
//Dynamic Routes
// SHOW
breads.get('/:arrayIndex', (request, response) => 
{
    // whitelist only the indexes that exist in the breadDataArray
    const breadDataArrayIndexes = Array.from({ length : breadDataArray.length}, (value, index) => index);
    if (breadDataArrayIndexes.includes(parseInt(request.params.arrayIndex)))   
    {
        response.render('showBreadInfo',
        {
            bread: breadDataArray[request.params.arrayIndex]
        })
    }
    else
    {
        //redirect to the error page 
        response.status(404).render('errorPage');
    }
});
  



module.exports = breads;
