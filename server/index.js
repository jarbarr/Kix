const express = require('express');
const app = express();
const path = require('path');
const model = require('../db/model.js');
const seed = require('../db/seed.js');
const port = 3000;
// const endpoint1 = '/defaultData';
// const endpoint2 = '/colorChoice';
const endpoint = '/kix';

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get(endpoint, (req, res) => {
  model.count(req, (err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send(data);
    }
  });
});
app.post(endpoint, (req, res) => {
  model.fetch(req.body, (err, data) => {
    if (err) {
      res.status(404).send();
    } else {
      // console.log(data)
      res.status(200).send(data);
    }
  });
});
// app.post(endpoint, (req, res) => {
//   model.save(seed, (err) => {
//     if (err) {
//       res.status(404).send();
//     } else {
//       res.status(200).send();
//     }
//   });
// });

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on port ${port}`);
  }
});
