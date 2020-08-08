const express = require('express');
const app = express();
const path = require('path');
const model = require('../db/model.js');
const seed = require('../db/seed.js');
const port = 3000;
const endpoint = '/kix';

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get(endpoint, (req, res) => {
  model.count(req, (err) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send();
    }
  });
});
app.post(endpoint, (req, res) => {
  model.save(seed, (err) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send();
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on port ${port}`);
  }
});
