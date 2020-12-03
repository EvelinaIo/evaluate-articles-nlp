// Set up Environment variables
const dotenv = require('dotenv');
dotenv.config();

// Require Express to run server and routes
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// Start up an instance of app
const app = express()

/* Dependencies*/
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

/* Middleware*/
// Cors for cross origin allowance
app.use(cors());

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.text())

// Initialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)

// Send the main page to browser
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//GET Route 
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

/* API call parts */
const API_KEY = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const keyURL = `?key=${API_KEY}`;
const userURL = '&url=';
const langURL = '&lang=auto';

app.post('/api', apiResponse );

async function apiResponse(req, res) { 
    console.log(`Url is: ${req.body}`)
    const userInput = req.body;
    const newURL = baseURL + keyURL + userURL + userInput + langURL;
    const response = await fetch(newURL);
    try {
        const apiReport = await response.json();
        console.log(apiReport);
        res.send(apiReport);
    } catch (error){
        console.log('error')
    }
}