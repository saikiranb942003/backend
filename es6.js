/*
-> es6 stands for Ecmascript 6 also knowm as ECmascript 2015
-> its a major update to javascript that added a lot of new features to make 
coding easier cleaner, more powerful
-> some popular es6 features include :
   -> let and const for variable declarations (instead of just var)
   -> arrow functions ( () => {}) for
-> template literals (using bakticks `hello ${name}`) for easier string handling
-> destructuring (pulling values out of arrays or objects easily)
-> default parameters in funations
-> classes (a cleaner way to write object-oriented code)
-> promises for better handling of asynchronous operations
-> modules (import and export code between files)
-> basically es6 made js much more modern and nicer to work


*/

// using es6 features in previous examples

// Importing required modules
import express from 'express'; // import statements

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
   res.send('server is running succesfully');
});

// In-memory user array
let users = [];

// GET all users
app.get('/users', (req, res) => { // arrow functons
  res.json(users);
});

// GET user by name
app.get('/users/:name', (req, res) => {
  const { name } = req.params;
  const user = users.find(u => u.name === name);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// POST a new user
app.post('/users', (req, res) => {
  const { name, city, education } = req.body;
  if (!name || !city || !education) {
    return res.status(400).json({ error: 'Provide name, city, and education' });
  }

  const duplicate = users.find(user => user.name === name);
  if (duplicate) {
    return res.status(409).json({ error: 'User already exists.' });
  }

  users.push({ name, city, education });
  res.status(201).json({ message: 'User added', users });
});

// PUT (update) a user by name
app.put('/users/:name', (req, res) => {
  const { name } = req.params;
  const { city, education } = req.body;
  const user = users.find(u => u.name === name);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.city = city ?? user.city;
  user.education = education ?? user.education;

  res.json({ message: 'User updated', user });
});

// PATCH (partial update)
app.patch('/users/:name', (req, res) => {
  const { name } = req.params;
  const { city, education } = req.body;
  const user = users.find(u => u.name === name);
  if (!user) return res.status(404).json({ error: 'User not found' });

  if (city) user.city = city;
  if (education) user.education = education;

  res.json({ message: 'User partially updated', user });
});

// DELETE a user by name
app.delete('/users/:name', (req, res) => {
  const { name } = req.params;
  const initialLength = users.length;
  users = users.filter(u => u.name !== name);

  if (users.length === initialLength) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({ message: 'User deleted', users });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


