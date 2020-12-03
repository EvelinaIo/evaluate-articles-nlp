var validUrl = require('valid-url');


export function UrlIsValid(inputText) {
  if (validUrl.isUri(inputText)){
    console.log('Looks like an URI');
} else {
    console.log('Not a URI');
}
  }


