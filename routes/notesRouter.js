const app = require('express').Router();
const path = require('path');
const dataBase = require('../db/db.json');
const uuid = require('../helpers/uuid');
const { readAndAppend, writeToFile } = require('../helpers/fsUtils');

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  res.json(dataBase);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;

  newNote.id = uuid();
  if (newNote) {
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added!`);
    dataBase.push(newNote);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = app;
