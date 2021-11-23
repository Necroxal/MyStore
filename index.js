const express = require('express');
const routerApi =  require('./routes');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola ruta');
});

routerApi(app);



// app.get('/categories/:cateroryId/products/:productId', (req,res)=>{
//   const { productId,cateroryId  } = req.params;
//   res.json({
//     cateroryId,
//     productId
//   });
// });

// app.get('/users', (req,res)=>{
//   const {limit, offset} = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     });
//   }else{
//     res.send('No hay parametros')
//   }
// });

app.listen(port, () => {
  console.log('Mi port ' + port)
});
