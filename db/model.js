const schema = require('./index.js');
const mongoose = require('mongoose');

// each model is an instance of the schema related to the particular color choice or 'option'
const Option1 = mongoose.model('Option1', schema);
// const Option2 = mongoose.model('Option2', schema);
// const Option3 = mongoose.model('Option3', schema);
// const Option4 = mongoose.model('Option4', schema);

module.exports = {
  save: (data, callback) => {
    const shoeStyle1 = new Option1(data);
    // const shoeStyle2 = new Option2(data);
    // const shoeStyle3 = new Option3(data);
    // const shoeStyle4 = new Option4(data);

    shoeStyle1.save((err) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('success!');
        callback(null, data);
      }
    });
    // shoeStyle2.save((err) => {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     console.log('success!');
    //     callback(null, data);
    //   }
    // });
    // shoeStyle3.save((err) => {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     console.log('success!');
    //     callback(null, data);
    //   }
    // });
    // shoeStyle4.save((err) => {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     console.log('success!');
    //     callback(null, data);
    //   }
    // });
  },
  Option1: Option1,
  // Option2: Option2,
  // Option3: Option3,
  // Option4: Option4,

  count: (request, callback) => {
    Option1.find({}, null, {limit: 10}, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        console.log(data);
        callback(null, data);
      }
    });
  }
  //   Option2.estimatedDocumentCount((err, data) => {
  //     if (err) {
  //       callback(err, null);
  //     } else {
  //       callback(null, data);
  //     }
  //   });
  //   Option3.estimatedDocumentCount((err, data) => {
  //     if (err) {
  //       callback(err, null);
  //     } else {
  //       callback(null, data);
  //     }
  //   });
  //   Option4.estimatedDocumentCount((err, data) => {
  //     if (err) {
  //       callback(err, null);
  //     } else {
  //       callback(null, data);
  //     }
  //   });
  // }
  // count: () => {
  //   Option1.estimatedDocumentCount((err, data) => {
  //     if (err) {
  //       console.log(err, null);
  //     } else {
  //       console.log(null, data);
  //     }
  //   });
  //   Option2.estimatedDocumentCount((err, data) => {
  //     if (err) {
  //       console.log(err, null);
  //     } else {
  //       console.log(null, data);
  //     }
  //   });
  //   Option3.estimatedDocumentCount((err, data) => {
  //     if (err) {
  //       console.log(err, null);
  //     } else {
  //       console.log(null, data);
  //     }
  //   });
  //   Option4.estimatedDocumentCount((err, data) => {
  //     if (err) {
  //       console.log(err, null);
  //     } else {
  //       console.log(null, data);
  //     }
  //   });
  // }
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
