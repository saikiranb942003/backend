/*const express = require('express')
const app = express();

app.use(express.json());
let users = [
    { id : 1, name : 'sai'},
    { id : 2, name : 'kiran'}
]


app.post('/users', (req,res) => {
    const newUser = {
        id : users.length + 1,
        name : req.body.name
    };

    users.push(newUser);
    res.status(201).json(newUser);

});


app.listen(6000, () => {
    console.log('server runs at http://localhost:6000');
    
})
*/
const express = require('express');
const router = express.Router();

// Shared users array (simulate shared data for example purposes)
let users = [
  { id: 1, name: 'sai' },
  { id: 2, name: 'kiran' }
];

// POST a new user
router.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name is required' });

  const newUser = {
    id: users.length + 1,
    name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;



