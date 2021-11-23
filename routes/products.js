const express = require('express');
//Faker crea datos falsos
const faker = require('faker');
const router = express.Router();


router.get('/', (req, res) => {
  const products = [];
  const {
    size
  } = req.query; //query para determianr cunatps ´roductso llegan
  const limit = size || 10; //10 productos
  for (let index = 0; index < limit; index++) { //for con los limites
    products.push({
      name: faker.commerce.productName(), //Se crea nombre aletorio
      price: parseInt(faker.commerce.price(), 10), //Se crea precio parseado a INt base 10
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});


router.get('/filter', (req, res) => {
  res.send('Soy un filer')
});

router.get('/:id', (req, res) => {
  const {
    id
  } = req.params.id;
  res.json({
    id,
    name: "Producto 2",
    price: 800
  })
});

module.exports = router;

