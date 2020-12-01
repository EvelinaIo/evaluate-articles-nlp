// Set up Environment variables
const dotenv = require('dotenv');
dotenv.config();
const application_key = process.env.API_KEY;

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// Start up an instance of app
const app = express()

/* Dependencies*/
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware*/
// Cors for cross origin allowance
app.use(cors());

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
