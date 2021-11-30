const express = require('express');
const ProducsService = require('./..//services/product.service')
const router = express.Router();
const service = new ProducsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filer')
});

router.get('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const product = await service.findOne(id); //Ejecuta una promesa de los servicios por eso se usa await
    res.json(product);

  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const body = req.body;
    const prodcut = await service.update(id, body);
    res.json(prodcut);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  const {
    id
  } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
