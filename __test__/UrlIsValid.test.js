import {UrlIsValid} from "../src/client/js/URLChecker"

describe('Test the function "UrlIsValid()" for valid url' , () => {
       test('It should return true', () => {
            const url = "https://www.wikipedia.org/";
            const response = UrlIsValid(url);
            expect(response).toBe(true);
       })
   });
   