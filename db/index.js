const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/kix', {useNewUrlParser: true});
const dbc = mongoose.connection;

dbc.on('error', console.error.bind(console, 'connection error'));
dbc.once('open', () => (console.log('successful connection')));




const carousel = mongoose.Schema({
  main: String,
  gallery: { 1: String, 2: String, 3: String, 4: String, 5: String, 6: String, 7: String, 8: String, 9: String, 10: String, 11: String },
  options: { 1: String, 2: String, 3: String, 4: String, 5: String, 6: Number},
  highlights: { header1: String, header2: String, header3: String, p1: String, p2: String, p3: String, img1: String, img2: String, img3: String },
  details: { 1: String, 2: String, 3: String, 4: String, 5: String, 6: String, 7: String, 8: String },
  description: { title: String, header: String, bio: String, url: String, img: String }
});

// const carousel = mongoose.Schema({
//   gallery: { main: String, legs: String, lifestyle: { img1: String, img2: String, img3: String, img4: String, img5: String, img6: String }, color: String, legs: String, top: String, bottom: String, angle: String, angle: String, side: String, detail1: String, detail2: String, detail3: String },
//   thumbnail: { main: String, legs: String, lifestyle: { img1: String, img2: String, img3: String, img4: String, img5: String, img6: String }, color: String, legs: String, top: String, bottom: String, angle: String, angle: String, side: String, detail1: String, detail2: String, detail3: String },
//   highlghts: { hl1: String, hl2: String, hl3: String, url1: String, url2: String, url3: String },
//   description: { header: String, bio: String, url: String },
//   details: String,
//   story: { ad: String, link: String },
//   completeTheLook: String,
//   howToStyle: String
// });


module.exports = carousel;

