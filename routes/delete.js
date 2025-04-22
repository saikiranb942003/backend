/*const express = require('express')
const app = express();

app.use(express.json());
let users = [
    { id : 1, name : 'sai'},
    { id : 2, name : 'kiran'}
]


app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

     users = users.filter(u => u.id !== userId);
   
   res.json({message : 'user deleted'});
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

// DELETE a user by ID
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users.splice(userIndex, 1);
  res.json({ message: 'User deleted' });
});

module.exports = router;



