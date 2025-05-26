
/*
-> controllers are used to:
-> seperate business logic from routing logic - making the code cleaner and more maintanable 
-> organise code better : easier to debug and scale 
-> keep routes concise : route files only define endpoints while controllers handle request processing    
-> reuse logic : controllers can be shared across multiple routes if needed 

// eg :
routes/user.js : what endpoint is being called 
controllers/userController.js : what happens when it is called 


*/

const bcrypt = require('bcrypt'); // bcrypt library used for secure password hashing 
const User = require('../models/user');

exports.signupUser = async (req, res) => {
    const { name, username, password, mobileNo, address } = req.body;

    try {
        const existingUser = await User.findOne({ where: { username } });
        // checks the database if a user with the username alredy exists 
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
           // return is used to exit the fuunction early 
        }

        const hashedPassword = await bcrypt.hash(password, 10); // uses bcrypt to hash the password before saving it in the database 
        // 10 is the number of salt rounds (a cost factor for hashing) 
        const newUser = await User.create({
            name,
            username,
            password: hashedPassword,
            mobileNo,
            address
        });

        res.status(201).json({ message: 'Signup successful', data: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Signup failed', error: error.message });
    }
};
