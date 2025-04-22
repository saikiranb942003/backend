/*const express = require('express')
const app = express();

app.use(express.json());
let users = [
    { id : 1, name : 'sai'},
    { id : 2, name : 'kiran'}
]


app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedName = req.body.name;

    const user = users.find(u => u.id === userId);
    if(!user) {
        return res.status(404).json({message : 'user not found'});
        
    }
    user.name = updatedName;
        res.json(user);
})


app.listen(6000, () => {
    console.log('server runs at http://localhost:6000');
    
})
*/
const express = require('express');
const router = express.Router();

// Shared users array
let users = [
  { id: 1, name: 'sai' },
  { id: 2, name: 'kiran' }
];

// PUT (update) a user by ID
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;

  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  if (!name) return res.status(400).json({ message: 'Name is required' });

  user.name = name;
  res.json(user);
});

module.exports = router;



