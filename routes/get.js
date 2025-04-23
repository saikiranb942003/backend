/*const express = require('express')
const app = express();

app.use(express.json());
let users = [
    { id : 1, name : 'sai'},
    { id : 2, name : 'kiran'}
]


app.get('/users', (req, res) => {
    res.json(users);
})


app.listen(6000, () => {
    console.log('server runs at http://localhost:6000');
    
})
*/
const express = require('express');
const router = express.Router();

// Sample data
let users = [
  { id: 1, name: 'sai' },
  { id: 2, name: 'kiran' }
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET single user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  // Check for invalid or missing ID
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid or missing user ID' });
  }

  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

module.exports = router;


