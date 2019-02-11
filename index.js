const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/api/users', (req, res) => {
  db.find()
    .then(users => res.status(200).json(users))
    .catch(_ => res.status(500).json({error: 'The users information could not be retrieved'}));
})

server.post('/api/users', (req, res) => {
  if(req.body.name === undefined || req.body.bio === undefined) {
    res.status(400).json({error: 'Please provide a name and bio for the user.'})
  } else {
    db.insert(req.body)
      .then(userId => {
        db.findById(userId.id)
          .then(user => res.status(201).json(user))
          .catch(_ => res.status(500).json({error: 'Could not retrieve user'}));
      })
      .catch(_ => res.status(500).json({error: 'There was an error while saving the user to the database'}));
  }
})

server.get('/api/users/:id', (req, res) => {
  const userID = req.params.id;
  db.findById(userID)
    .then(user => user ? res.status(200).json(user) : res.status(404).json({error: 'User not found'}))
    .catch(_ => res.status(500).json({error: 'The user information could not be retrieved'}));
})

server.delete('/api/users/:id', (req, res) => {
  const userID = req.params.id;
  db.remove(userID)
    .then(del => del === 0 ? res.status(404).json({error: 'The user with the specified ID does not exist.'}) : res.status(200).json({message: 'User succesfully deleted', deleted: true}))
    .catch(_ => res.status(500).json({error: 'The user could not be removed'}));
})

server.listen(4000, _ => {
  console.log('Server running on port 4000');
})