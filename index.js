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

server.listen(4000, _ => {
  console.log('Server running on port 4000');
})