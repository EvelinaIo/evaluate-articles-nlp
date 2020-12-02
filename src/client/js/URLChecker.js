var validUrl = require('valid-url');


function UrlIsValid(inputText) {
  if (validUrl.isUri(inputText)){
    console.log('Looks like an URI');
} else {
    console.log('Not a URI');
}
  }

export { UrlIsValid }
