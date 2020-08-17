const schema = require('./index.js');
const mongoose = require('mongoose');


const Superstar = mongoose.model('Superstar', schema, 'superstar');
// const Supernova = mongoose.model('Supernova', schema, 'supernova');


module.exports = {
  // Supernova: Supernova,
  Superstar: Superstar,

  seed: (data, collection) => {
    // if (collection === 'superstar') {
    //   var shoeStyle = new Superstar(data);
    // } else if (collection === 'supernova') {
    //   shoeStyle = new Supernova(data);
    // }
    var shoeStyle = new Superstar(data);

    shoeStyle.save((err) => {
      if (err) {
        // callback(err, null);
        console.error(err);
      } else {
        console.log('success!');
        // callback(null, data);
      }
    });

  },

  count: (request, callback) => {
    Superstar.findOne({}, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  fetch: (req, callback) => {
    Superstar.findOne({main: req.main }, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });

  }
};

