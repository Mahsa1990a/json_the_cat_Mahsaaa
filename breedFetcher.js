const request = require('request');

let arges = process.argv.slice(2)[0];  //node breedFetcher.js Chartreux
//console.log(arges)
//https://thecatapi.com/
request(`https://api.thecatapi.com/v1/breeds/search?q=${arges}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received  ///meand api is ok
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body)

  const data = JSON.parse(body); //JSON.parde : change string to object
  //console.log(data);
  //console.log(typeof data); //object
  //console.log('first entry in data array : '+ JSON.stringify(data[0]));
  //console.log(data[0]['description'])  //Access the first entry in the data array
  console.log(data);

  if (data.length === 0) {    //error when you run node breedFetcher.js abjgcysw
    let errorMessage = 'The breed you entered was not found';
    console.log(errorMessage);
  } else if (response.statusCode !== 200) { //error when your http address is wrong
    let errorMessage = `API call failed with statusCode: ${response.statusCode}`;
    console.log(errorMessage);
  }
});