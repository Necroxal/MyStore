const express = require('express');
const routerApi =  require('./routes');
const {logErrors, errorHandler} = require('./middlewares/error.handle');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server express');
});

routerApi(app);
//los middelwares se usan depsues de definir el routing
//la app usa los middelwares
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port)
});
