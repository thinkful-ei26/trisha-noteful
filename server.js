'use strict';

// Load array of notes
const express = require('express');
const data = require('./db/notes');
const app = express();

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {res.json(data);});

app.get('/api/notes/:id', (req, res) => {
  //get the value of in dynamically changing :id
  const { id } = req.params;
  //use const 
  const reqNote = data.find(item => item.id === Number(id));
  res.json(reqNote);
});

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});
