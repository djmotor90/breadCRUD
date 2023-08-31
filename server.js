//Initalize express and include environment variables
require('dotenv').config();
const express = require('express');
const app     = express();

//Initialize the middleware
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())




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

//Catch all route
app.get('*', (request,response) =>
{
    //chain together the sent HTML and the HTTP status
    response.status(404).send('<h1> 404 Page not Found </h1>');

});



//Create ROUTES)
app.listen(PORT, () => 
{
    console.log(`listening on port ${PORT}`);
});