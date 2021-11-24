const express = require('express');
const productRouter = require('./products');
const usersRouter = require('./users');
const categoriesRouter =  require('./categories');

function routerApi(app){
  const router = express.Router(); //crear ruta mestra para las diferentes verisones
  app.use('/api/v1', router); //ruta global para todos los endpoints
  app.use('/products', productRouter);
  app.use('/categories', categoriesRouter);
  app.use('/users',  usersRouter);
}

module.exports = routerApi;
