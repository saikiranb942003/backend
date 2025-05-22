 const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // if no user is found or the password is incorrect 
        // bcrypt.compare checks the plain password against the hashed one 
        // it returns a authentication error
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        // if login successful 
        // creates jwt token using jwt.sign() 
        // payload includes user.id and username 
        // its signed using jwt_secreat from .env 
        

        res.json({ message: 'Login successful', data: token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};
