const express  = require('express');
const breads   = express.Router();
// Load in Data
const breadDataArray = require('../models/bread.js');

// Static Routes
breads.get('/', (request, response) => 
{
    response.render('index',
        {
            breadDataArray : breadDataArray,
            title          : 'Bread Inventory List'
        }
    )
});

breads.post('/', (request,response) =>
{
    if (!request.body.image) 
    {
      request.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
    }
    if(request.body.hasGluten === 'on') 
    {
      request.body.hasGluten = true;
    }
    else 
    {
      request.body.hasGluten = false;
    }
    breadDataArray.push(request.body)
    response.redirect('/breads')
});


breads.get('/new', (request, response) => 
{
    response.render('newBread');
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
            bread: breadDataArray[request.params.arrayIndex],
            index: request.params.arrayIndex
        });
    }
    else
    {
        //redirect to the error page 
        response.status(404).render('errorPage');
    }
});
breads.delete('/:arrayIndex', (request, response) =>
{
    breadDataArray.splice(request.params.arrayIndex, 1);
    response.status(303).redirect('/breads');
});
// UPDATE
breads.put('/:arrayIndex', (request, response) => 
{
    if(request.body.hasGluten === 'on')
    {
      request.body.hasGluten = true;
    } 
    else 
    {
      request.body.hasGluten = false;
    }
    breadDataArray[request.params.arrayIndex] = request.body;
    response.redirect(`/breads/${request.params.arrayIndex}`);
});
// EDIT
breads.get('/:indexArray/edit', (request, response) => 
{
    response.render('editPage', 
    {
      bread: breadDataArray[request.params.indexArray],
      index: request.params.indexArray
    })
})


  



module.exports = breads;
