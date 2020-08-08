const schema = require('./index.js');
const mongoose = require('mongoose');

// each model is an instance of the schema or carousel
// each document is related to the color choices
const ShoeStyle1 = mongoose.model('ShoeStyle1', schema);
// const ShoeStyle2 = mongoose.model('ShoeStyle2', schema);
// const ShoeStyle3 = mongoose.model('ShoeStyle3', schema);
// const ShoeStyle4 = mongoose.model('ShoeStyle4', schema);

module.exports = {
  save: (data, callback) => {
    const shoeColor1 = new ShoeStyle1(data);
    // const shoeColor2 = new ShoeStyle2(data);
    // const shoeColor3 = new ShoeStyle3(data);
    // const shoeColor4 = new ShoeStyle4(data);

    shoeColor1.save((err) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('success!');
        callback(null, data);
      }
    });
    // shoeColor2.save((err) => {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     console.log('success!');
    //     callback(null, data);
    //   }
    // });
    // shoeColor3.save((err) => {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     console.log('success!');
    //     callback(null, data);
    //   }
    // });
    // shoeColor4.save((err) => {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     console.log('success!');
    //     callback(null, data);
    //   }
    // });
  },
  ShoeStyle1: ShoeStyle1,
  // ShoeStyle2: ShoeStyle2,
  // ShoeStyle3: ShoeStyle3,
  // ShoeStyle4: ShoeStyle4,

  count: (request, callback) => {
    ShoeStyle1.find({}, null, {limit: 10}, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        console.log(data);
        callback(null, data);
      }
    });
  //   ShoeStyle2.estimatedDocumentCount((err, data) => {
  //     if (err) {
  //       callback(err, null);
  //     } else {
  //       callback(null, data);
  //     }
  //   });
  //   ShoeStyle3.estimatedDocumentCount((err, data) => {
  //     if (err) {
  //       callback(err, null);
  //     } else {
  //       callback(null, data);
  //     }
  //   });
  //   ShoeStyle4.estimatedDocumentCount((err, data) => {
  //     if (err) {
  //       callback(err, null);
  //     } else {
  //       callback(null, data);
  //     }
  //   });
  }

  // let search = (req, callback)=>{
//   Repo.find({stars: {$gte: 0}}, null, {limit:25}, (err, docs)=>{
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, docs);
//     }
//   });
// to find specific use if desired
// Repo.find({username: 'awesome-mac'}, (err, docs)=>{
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(docs)
//   }
// })
// }
};
