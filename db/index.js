const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/kix', {useNewUrlParser: true});
const dbc = mongoose.connection;

dbc.on('error', console.error.bind(console, 'connection error'));
dbc.once('open', () => (console.log('successful connection')));




const carousel = mongoose.Schema({
  gallery: { main: String, legs: String, lifestyle: { img1: String, img2: String, img3: String, img4: String, img5: String, img6: String }, color: String, legs: String, top: String, bottom: String, angle: String, angle: String, side: String, detail1: String, detail2: String, detail3: String },
  thumbnail: { main: String, legs: String, lifestyle: { img1: String, img2: String, img3: String, img4: String, img5: String, img6: String }, color: String, legs: String, top: String, bottom: String, angle: String, angle: String, side: String, detail1: String, detail2: String, detail3: String },
  highlghts: { hl1: String, hl2: String, hl3: String, url1: String, url2: String, url3: String },
  description: { header: String, bio: String, url: String },
  details: String,
  story: { ad: String, link: String },
  completeTheLook: String,
  howToStyle: String
});



module.exports = carousel;

