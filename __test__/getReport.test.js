import {getReport} from "../src/client/js/formHandler"

// mock an API call
const fetch = require('node-fetch');
jest.mock('node-fetch');


describe("Check the connection with api", async ()=>{
    test("The function should return expected api response using the mockResolvedValue", async()=> {
            //this is the status object returned by the address we set below
            fetch.mockResolvedValue({
                "status": {
                    "code" : "0"
                }
            });

            const apiURL = "http://localhost:8081/api"
            const data = await getReport( apiURL , "https://www.itsnicethat.com/news/giphy-most-viewed-gifs-of-the-year-animation-011220");
            expect(data).toEqual({
                "status": {
                    "code" : "0"
                }
            });
    });
});