/*
-> in node.js when we are using express.js routes define the different endpoints
(urls) that our app will respond to and what should happn when someone visits or makes a request 
to that endpoint
-> its like signpost on a website that tells the server
-> when someone goes to /users or /login then it tells server what you should do

*/

const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());


let users = [
  { id: 1, name: 'sai' },
  { id: 2, name: 'kiran' }
];

//  GET: Fetch all users
app.get('/users', (req, res) => {
  res.json(users);
});

//  POST: Add a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

//  PUT: Update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedName = req.body.name;

  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.name = updatedName;
  res.json(user);
});

// DELETE: Remove a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.json({ message: 'User deleted' });
});

// Start server
app.listen(6000, () => {
  console.log('Server is running on http://localhost:6000');
});
