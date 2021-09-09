const router = require('express').Router();
const path = require('path');
const dataBase = require('../../db/db.json');
const uuid = require('../../helpers/uuid');
const fs = require('fs');
const {
  readAndAppend,
  writeToFile,
  deleteNote,
} = require('../../helpers/fsUtils');

router.get('/', (req, res) => {
  const allNotes = fs.readFileSync('./db/db.json');
  const parsedNotes = JSON.parse(allNotes);
  res.json(parsedNotes);
});

router.post('/', (req, res) => {
  const newNote = req.body;

  if (newNote) {
    newNote.id = uuid();
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added!`);
    dataBase.push(newNote);
  } else {
    res.error('Error adding note.');
  }
});

router.delete('/:id', (req, res) => {
  deleteNote(req.params.id, './db/db.json');
  res.json('Note deleted!');
});

module.exports = router;
