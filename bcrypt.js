 /*
// bcrypt 
-> bcrypt is a password hashing library designed to help us securely store user passwords 
-> it uses a cryptographic hashing algorithm and includes a technique called salting 
-> which protects common attacks like : 
-> rainbow table attacks
-> brute force attacks 
-> hash collision attacks 

// why use bcrypt
-> plain text passwords are huge security risk
-> if a database is compromised attackers get all the passwords in readble form 
-> with bcrypt even if our database is leaked the hashed passwords are not directly usuable 

// working 

1. salting : addds a random string to the password before hashing 
2. hashing : applies a complex algorithm to create a unique fixed length output 
3. work factor : controls how expensive the hashing process is (measured in salt rounds) 



 */

const bcrypt = require('bcrypt');
const plainPassword = 'password123';

bcrypt.hash(plainPassword,10,(err,hash) => { // plainpassword : the password to hash 
    // 10 : salt rounds more rounds = more secure but slower 
    if(err) {
        return console.error(err);
    }

    console.log('hashed password :',hash);

    // compare later
    const userInput = 'password123'; // password entered at login 
    bcrypt.compare(userInput, hash, (err, result) => { // compares plain text with the hash to see if they match 
        // used during login to verify password 
        if(err) {
            return console.log(err);
        }

        if(result) {
            console.log('password matched');
            
        } else {
            console.log('invalid password');
            
        }
    });

});

/*
output :
hashed password : $2b$10$.2kSldyxvxptZNr3vlxxg.yi89183lz9rDV/6/7kF7UOa0wUhSHQO
password matched
*/

