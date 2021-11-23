const productRouter = require('./products');
const usersRouter = require('./users');
const categoriesRouter =  require('./categories');

function routerApi(app){
  app.use('/products', productRouter);
  app.use('/categories', categoriesRouter);
  app.use('/users',  usersRouter);
}

module.exports = routerApi;
