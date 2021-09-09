const express = require('express');

const fs = require('fs');
const uuid = require('./helpers/uuid');
const dataBase = require('./db/db.json');
const { readAndAppend, writeToFile } = require('./helpers/fsUtils');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(routes);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
