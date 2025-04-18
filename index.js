let person = require('./data.js')

// require imports data from the data.js file

for(let key in person) {
    //console.log(key);
    
    console.log(key + ": " + person[key] );
    
}

/*
output :
fname: sai
lname: kiran
age: 20
tech: javascript
*/



