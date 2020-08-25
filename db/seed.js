const model = require('./model.js');
const faker = require('faker');


// fake data ========================================================

// need between 10 and 13 per doc
// let images = `${faker.image.imageUrl()}`;
// // same as images
// let thumbnails = `${faker.image.imageUrl()}`;
// // between 1 and 8
// let options = `${faker.image.imageUrl()}`;
// // either null or 3
// let highLightsImg = `${faker.image.imageUrl()}`;

// let highLightsCap = `${faker.lorem.sentence()}`;

// let descriptions = `${faker.lorem.paragraph()}`;

// let specifications = `${faker.lorem.slug()}`;

// let theLook = `${faker.internet.url()}`;

// let story = [`${faker.lorem.sentence()}`, `${faker.internet.url()}`];

// let style = `${faker.lorem.sentence()}`;



// let shoeStyle = {
//   gallery: { main: images, legs: images, lifestyle: { img1: images, img2: images, img3: images, img4: images, img5: images, img6: images }, color: images, legs: images, top: images, bottom: images, angle: images, angle: images, side: images, detail1: images, detail2: images, detail3: images },
//   highlghts: { hl1: highLightsCap, hl2: highLightsCap, hl3: highLightsCap, url1: highLightsImg, url2: highLightsImg, url3: highLightsImg },
//   description: { header: descriptions, bio: descriptions, url: descriptions },
//   details: specifications,
//   story: { ad: story[0], link: story[1] },
//   completeTheLook: theLook,
//   howToStyle: style
// };

// const seedData = () => {
//   for (let i = 0; i < 100; i++) {
//     model.Option1.create(shoeStyle);
//   }
// };

// seedData();

// real data ==================================================


const fillDataBase = () => {
  model.seed({
    main: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg',
    gallery: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/Superstar_Shoes_Black_legs.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/lifestyle/lifestyle2.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_black_top.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/Superstar_black_bottom.jpg', 6: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/Superstar_black_angle_1.jpg', 7: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/Superstar_black_angle2.jpg', 8: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/Superstar_black_side1.jpg', 9: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/Superstar_black_detail1.jpg', 10: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/Superstar_black_detail2.jpg', 11: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/Superstar_black_detail3.jpg' },
    highlights: null,
    options: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg', 6: 5 },
    description: { title: 'SUPERSTAR SHOES', header: 'CASUAL TRAINERS CELEBRATING 50 YEARS OF STREETWEAR HISTORY.', bio: 'The adidas Superstar Shoes first stepped onto the basketball hardwood in 1970. It didn\'t take long for them to make the leap from athletic gear to streetwear staple. These shoes show off the materials, proportions and style that made the original such a legend. They\'ve got a smooth leather upper with sporty 3-Stripes and a heel tab. They\'re finished off with the world-famous rubber shell toe.', img: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/Superstar_black_angle_1.jpg' },
    details: {1: 'Regular fit', 2: 'Lace Closure', 3: 'Leather upper', 4: 'Leather trainers with lace jewels', 5: 'Rubber outsole', 6: 'Imported', 7: 'Product Color White / Core Black / Gold Metallic', 8: 'Product Code FV3396' }
  }, 'superstar');
  model.seed({
    main: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg',
    gallery: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/legs.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/lifestyle.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/top.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/bottom.jpg', 6: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/angle1.jpg', 7: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/angle2.jpg', 8: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/side.jpg', 9: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/detail1.jpg', 10: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/detail2.jpg', 11: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/detail3.jpg' },
    highlights: null,
    options: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg', 6: 5 },
    description: { title: 'SUPERSTAR SHOES', header: 'CASUAL TRAINERS CELEBRATING 50 YEARS OF STREETWEAR HISTORY.', bio: 'The adidas Superstar Shoes first stepped onto the basketball hardwood in 1970. It didn\'t take long for them to make the leap from athletic gear to streetwear staple. These shoes show off the materials, proportions and style that made the original such a legend. They\'ve got a smooth leather upper with sporty 3-Stripes and a heel tab. They\'re finished off with the world-famous rubber shell toe.', img: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/angle1.jpg'},
    details: {1: 'Regular fit', 2: 'Lace Closure', 3: 'Leather upper', 4: 'Leather trainers with lace jewels', 5: 'Rubber outsole', 6: 'Imported', 7: 'Product Color White / Core Black / Gold Metallic', 8: 'Product Code FV3396' }
  }, 'superstar');
  model.seed({
    main: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg',
    gallery: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/legs2.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/lifestyle.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/top.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/bottom.jpg', 6: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/angle.jpg', 7: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/angle2.jpg', 8: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/side.jpg', 9: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/detail.jpg', 10: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/detail2.jpg', 11: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/detail3.jpg' },
    highlights: { header1: 'A TOUCH OF SPARKLE', header2: 'SMOOTH RIDE', header3: 'CELEBRATE AN ICON', p1: 'Silver jewels stand out on the laces', p2: 'The rubber outsole offers all-day comfort.', p3: 'These adidas Superstar shoes come with branded laces and lace jewel details.', img1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/detail.jpg', img2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/detail2.jpg', img3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/detail3.jpg' },
    options: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg', 6: 5 },
    description: { title: 'SUPERSTAR SHOES', header: 'CLASSIC ADIDAS SUPERSTAR SHOES WITH PLAYFUL JEWELS.', bio: 'These shoes update the unmistakable, iconic look of the adidas Superstar shoe with style that\'s fit for a pair of royal feet. Animal-print embossing stands out on the iridescent leather upper. A trainer-shaped lace jewel decorates one shoe, and a crown-shaped lace jewel decorates the other. Because your shoes should always be accessorized, don\'t you think?', img: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/angle.jpg'},
    details: {1: 'Regular fit', 2: 'Lace Closure', 3: 'Leather upper', 4: 'Leather trainers with lace jewels', 5: 'Rubber outsole', 6: 'Imported', 7: 'Product Color White / Core Black / Gold Metallic', 8: 'Product Code FV3396' }
  }, 'superstar');
  model.seed({
    main: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg',
    gallery: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/2.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/3.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/4.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/5.jpg', 6: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/6.jpg', 7: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/7.jpg', 8: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/8.jpg', 9: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/9.jpg', 10: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/10.jpg', 11: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/11.jpg' },
    highlights: { header1: 'A SPLASH OF GOLD', header2: 'DATA-DRIVEN DESIGN', header3: 'METALLIC FINISH', p1: 'Fresh new look with retro feel.', p2: 'The rubber outsole offers all-day comfort.', p3: 'These adidas Superstar shoes come with gold laces and lace gold details.', img1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/9.jpg', img2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/10.jpg', img3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/11.jpg' },
    options: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg', 6: 5 },
    description: { title: 'SUPERSTAR SHOES', header: 'THE AUTHENTIC LOW TOP WITH THE SHELL TOE, MADE IN SMOOTH LEATHER.', bio: 'When pro basketball players first laced up the adidas Superstar way back in 1969, nobody knew how famous the shell toe would become. Nearly half a century later, the iconic low top hasn\'t lost a step. With a smooth leather upper on a sturdy rubber cupsole, these women\'s shoes are true to the authentic design. A metallic finish on the 3-Stripes and heel patch adds a touch of contemporary style.', img: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/6.jpg'},
    details: {1: 'Smooth leather upper with metallic finish on 3-Stripes and heel patch', 2: 'Classic rubber shell toe; Metallic logo on tongue', 3: 'Synthetic leather lining', 4: 'Metallic logo on quarter panel; Enjoy the comfort and performance of OrthoLite® sockliner', 5: 'Debossed and screenprinted logo on heel', 6: 'Main materials: Leather and rubber upper / Leather lining / Rubber outsole', 7: 'Product color: Cloud White / Cyber Metallic / Cloud White', 8: 'Product Code FV3396' }
  }, 'superstar');
  model.seed({
    main: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg',
    gallery: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/2.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/3.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/4.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/5.jpg', 6: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/6.jpg', 7: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/7.jpg', 8: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/8.jpg', 9: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/9.jpg', 10: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/10.jpg', 11: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/11.jpg' },
    highlights: null,
    options: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg', 6: 5 },
    description: { title: 'SUPERSTAR SHOES', header: 'CASUAL TRAINERS CELEBRATING 50 YEARS OF STREETWEAR HISTORY.', bio: 'The adidas Superstar Shoes first stepped onto the basketball hardwood in 1970. It didn\'t take long for them to make the leap from athletic gear to streetwear staple. These shoes show off the materials, proportions and style that made the original such a legend. They\'ve got a smooth leather upper with sporty 3-Stripes and a heel tab. They\'re finished off with the world-famous rubber shell toe.', img: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/6.jpg'},
    details: {1: 'Regular fit', 2: 'Lace Closure', 3: 'Leather upper', 4: 'Leather trainers with lace jewels', 5: 'Rubber outsole', 6: 'Imported', 7: 'Product Color White / Core Black / Gold Metallic', 8: 'Product Code FV3396' }
  }, 'superstar');
  model.seed({
    main: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/1.jpg',
    gallery: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/1.jpg', 2: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/2.jpg', 3: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/3.jpg', 4: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/4.jpg', 5: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/5.jpg', 6: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/6.jpg', 7: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/7.jpg', 8: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/8.jpg', 9: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/9.jpg', 10: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/10.jpg', 11: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/11.jpg' },
    highlights: { header1: 'DATA-DRIVEN DESIGN', header2: 'FLEXIBLE CUSHIONING', header3: 'GIVE ENERGY, GET ENERGY', p1: 'We studied runners\' movements to create a shoe with targeted breathability, flexibility and support.', p2: 'Bounce in the forefoot provides a comfortable ride.', p3: 'Boost in the heel delivers comfort and incredible energy return.', img1: null, img2: null, img3: null },
    options: { 1: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg', 2: '', 3: '', 4: '', 5: null, 6: 4 },
    description: { title: 'SUPERNOVA SHOES', header: 'SUPPORTIVE RUNNING SHOES WITH A BREATHABLE MESH UPPER.', bio: 'Everyone runs for different reasons. Whatever drives you to hit the path or the pavement, these adidas shoes are designed to help you reach your goals. Flexible cushioning in the forefoot combines with responsive cushioning in the heel to give you a comfortable ride. And because we\'re serious about creating a healthier environment, these shoes are built with recycled materials.', img: 'https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/Supernova_pink/6.jpg'},
    details: {1: 'Regular fit', 2: 'Lace Closure', 3: 'mesh upper', 4: 'Hybrid Bounce and Boost midsole', 5: 'These shoes are made with Primegreen, a series of high-performance recycled materials. The upper contains a minimum of 50% recycled content.', 6: 'Weight: 11 ounces', 7: 'Product color: Signal Pink / Core Black / Copper Metallic', 8: 'Product Code FW0704' }
  }, 'supernova');

};

fillDataBase();