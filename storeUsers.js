const express = require('express');// imports express framework
const app = express();
app.use(express.json());

let users = []; // In-memory user array

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});
/*
url : http://localhost:3000/Users 
output:
[
    {
        "name": "sai",
        "city": "Banglore",
        "education": "BE"
    }
]






*/

// POST a new user
app.post('/users', (req, res) => {
  const { name, city, education } = req.body;

  if (!name || !city || !education) {
    return res.status(400).json({ error: 'give name, city, and education' });
  }

  users.push({ name, city, education });
  res.status(201).json({ message: 'User added', users });
});
/*
output: using postman 
url : http://localhost:3000/Users 
method : post
body :
{
    "name" : "sai",
    "city" : "Banglore",
    "education" : "BE"

}

output :
{
    "message": "User added",
    "users": [
        {
            "name": "sai",
            "city": "Banglore",
            "education": "BE"
        }
    ]
}



*/
// PUT (update) a user by name 
app.put('/users/:name', (req, res) => {
  const { name } = req.params;
  const { city, education } = req.body;

  const user = users.find(u => u.name === name);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (city) user.city = city;
  if (education) user.education = education;

  res.json({ message: 'User updated', user });
});
/*
url : http://localhost:3000/Users/kiran
output :
{
    "message": "User updated",
    "user": {
        "name": "kiran",
        "city": "Kurnool",
        "education": "MTech"
    }
}
*/

// PATCH (partially update a user by name)
app.patch('/users/:name', (req, res) => {
  const { name } = req.params;
  const { city, education } = req.body;

  const user = users.find(u => u.name === name);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (city) user.city = city;
  if (education) user.education = education;

  res.json({ message: 'User partially updated', user });
});
/*
url : http://localhost:3000/Users/sai
output :
{
    "message": "User partially updated",
    "user": {
        "name": "sai",
        "city": "Banglore",
        "education": "MSc"
    }
}

*/

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
/*
url : http://localhost:3000/users/kiran
output :
{
    "message": "User deleted",
    "users": [
        {
            "name": "sai",
            "city": "Banglore",
            "education": "BE"
        }
    ]
}



*/

// Start server
// const PORT = 3000;
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
