 /*
// axios

-> axios is a promise based http client for node.js and browsers 
-> it allows our application to make http requests to fetch or save data from a remote server 
-> such as rest api 
// commonly used 
-> communicate with third party apis 
-> connect to internal microservices 
-> fetch data from servers 
-> send data to backends 

// key features 
-> Promise-based : axios uses promises making it perfect with async/await or .then() 
-> works in browser and node.js : same api for forntend and backend 
-> supports all http methods : get, post, put, patch, delete 
-> interceptors : middleware style interceptors for requests and responses 

*/  

// making a get request 

const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/1') 
    .then(response => {
        console.log(response.data); // json response from api 

        
    })
    .catch(error => {
        console.log('error:',error.message);
        
    });



// using with async/await 

//const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1'); 
        console.log(response.data);
        
    } catch (error) {
        console.error('request failed:', error.message);
        
    }
}

fetchData();


// post request with data 

//const axios = require('axios');

axios.post('https://jsonplaceholder.typicode.com/posts',{
    title : "hi hello",
    body : 'this is demo',
    userId : 1
})
.then(response => {
    console.log(response.data);
    
})
.catch(error => {
    console.log('error posting data:', error.message);
    
})
