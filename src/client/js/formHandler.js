const fetch = require('node-fetch');

function handleSubmit(event) {
    event.preventDefault()

    // Get user input
    let inputURL = document.getElementById('url').value
    let results = document.getElementById('results');
    // check if url is valid using URLChecker
    if (!Client.UrlIsValid(inputURL)){
        console.log("Invalid url");
        results.innerHTML = "Invalid url";
    } else {
        console.log("Valid url!");
        results.innerHTML = "";
    }
console.log("::: URL Submitted :::")

    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export {handleSubmit}
