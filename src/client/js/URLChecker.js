var validUrl = require('valid-url');


export function UrlIsValid(inputText) {
  if (validUrl.isUri(inputText)){
    console.log('Looks like an URI');
    return true;
} else {
    console.log('Not a URI');
    return false;
}
  }


