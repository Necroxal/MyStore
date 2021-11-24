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
  } = req.params;
  if (id == '999') {
    res.status(404).json({
      message: 'Not found'
    });
  } else {
    res.status(200).json({
      id,
      name: "Producto 2",
      price: 800
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const {
    id
  } = req.params;
  const body = req.body;
  res.json({
    message: 'update ',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const {
    id
  } = req.params;
  res.json({
    message: 'Delete ',
    id
  });
});

module.exports = router;
