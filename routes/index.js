const productRouter = require('./products');

function routerApi(app){
  app.use('/products', productRouter);
}

module.exports = routerApi;
