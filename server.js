const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');
const { log } = require('console');
const dataBase = require('./db/db.json');
const { readAndAppend, writeToFile } = require('./helpers/fsUtils');
const routes = require('./routes/notesRouter');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
