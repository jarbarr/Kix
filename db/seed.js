const model = require('./model.js');
const faker = require('faker');

// need between 10 and 13 per doc
let images = `${faker.image.imageUrl()}`;
// same as images
let thumbnails = `${faker.image.imageUrl()}`;
// between 1 and 8
let options = `${faker.image.imageUrl()}`;
// either null or 3
let highLightsImg = `${faker.image.imageUrl()}`;

let highLightsCap = `${faker.lorem.sentence()}`;

let descriptions = `${faker.lorem.paragraph()}`;

let specifications = `${faker.lorem.slug()}`;

let theLook = `${faker.internet.url()}`;

let story = [`${faker.lorem.sentence()}`, `${faker.internet.url()}`];

let style = `${faker.lorem.sentence()}`;

let shoeStyle = {
  gallery: { main: images, legs: images, lifestyle: { img1: images, img2: images, img3: images, img4: images, img5: images, img6: images }, color: images, legs: images, top: images, bottom: images, angle: images, angle: images, side: images, detail1: images, detail2: images, detail3: images },
  thumbnail: { main: thumbnails, legs: thumbnails, lifestyle: { img1: thumbnails, img2: thumbnails, img3: thumbnails, img4: thumbnails, img5: thumbnails, img6: thumbnails }, color: thumbnails, legs: thumbnails, top: thumbnails, bottom: thumbnails, angle: thumbnails, angle: thumbnails, side: thumbnails, detail1: thumbnails, detail2: thumbnails, detail3: thumbnails },
  highlghts: { hl1: highLightsCap, hl2: highLightsCap, hl3: highLightsCap, url1: highLightsImg, url2: highLightsImg, url3: highLightsImg },
  description: { header: descriptions, bio: descriptions, url: descriptions },
  details: specifications,
  story: { ad: story[0], link: story[1] },
  completeTheLook: theLook,
  howToStyle: style
};

let docCount = {
  1: model.Option1.estimatedDocumentCount(),
  // 2: model.Option2.estimatedDocumentCount(),
  // 3: model.Option3.estimatedDocumentCount(),
  // 4: model.Option4.estimatedDocumentCount(),
};

// if (docCount[1] < 25 && docCount[2] < 25 && docCount[3] < 25 && docCount[4] < 25) {
//   model.save(shoeStyle);
// }

const seedData = () => {
  for (let i = 0; i < 100; i++) {
    model.Option1.create(shoeStyle);
  }
};

seedData();