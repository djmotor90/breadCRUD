//Initalize express and include environment variables
    //Purpose: stores and defines environment variables
require('dotenv').config();
    //Purpose: initialize express framework
const express        = require('express');
    //Purpose: overrides methods to allow forms to submit as put, delete, etc, anything other than its usual POST or GET
const methodOverride = require('method-override');
const mongoose = require('mongoose')


const app     = express();
    //Initialize the middleware
app.use(express.static('public'));
    //Purpose: go into the directory + views folder
app.set('views', __dirname + '/views');
    //Use the jsx ending and then use
app.set('view engine', 'jsx');
    //create the engine
app.engine('jsx', require('express-react-views').createEngine());
    //set up the middleware for reading urlencoded string
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


//Environment Variables
const PORT = process.env.PORT;

//Initialize ROUTERS

//Static Routes First
app.get('/', (request,response) => 
{
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