const fetch = require('node-fetch');

export async function handleSubmit(event) {
    event.preventDefault()

    // Get user input
    let inputURL = document.getElementById('url').value
    let results = document.getElementById('results');

    // check if url is valid using URLChecker
    if (!Client.UrlIsValid(inputURL)){
        console.log("Valid url!");
        results.innerHTML = "";
    } else {
        console.log("Invalid url");
        results.innerHTML = "Invalid url";
    }
        console.log("::: URL Submitted :::")

        // Store data from api in apiData after running post request to server
        let apiData = await getReport('http://localhost:8081/api', inputURL)
            .then (apiData => apiData.json())
            .then (function(res){updateUI(res)})
    
}
    
// Async function to post url to our server and retrieve external api data
export async function getReport(url, inputURL) {
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'text/plain',
            },
            // Body data type must match "Content-Type" header        
            body: inputURL,
            })
        return response;
    }
        
// async function to update UI with the results received from the api    
async function updateUI(res) {
    const results = document.getElementById('results');
    const subjectivity = document.createElement("div");
    const confidence = document.createElement("div");
    const irony = document.createElement("div");

    subjectivity.innerHTML = `SUBJECTIVITY: ${res.subjectivity}`;
    confidence.innerHTML = `CONFIDENCE: ${res.confidence}`;
    irony.innerHTML = `IRONY: ${res.irony}`;

    results.appendChild(subjectivity);
    results.appendChild(confidence);
    results.appendChild(irony);
    }