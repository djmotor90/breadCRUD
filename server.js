//Initalize express and include environment variables
require('dotenv').config();
const express = require('express');
const app     = express();


//Environment Variables
const PORT = process.env.PORT;

//Initialize ROUTERS
//Static Routes First
app.get('/', (request,response) => {
    response.send('Entry Page');
});


//Dynamic routes
//Breads Controller
app.use('/breads', require('./controller/breadsController.js'));


//Create ROUTES)
app.listen(PORT, () => 
{
    console.log(`listening on port ${PORT}`);
});