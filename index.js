const express = require('express');
//Faker crea datos falsos
const faker = require('faker');


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola ruta');
});

app.get('/products', (req, res) => {
  const products = [];
  const {size} = req.query; //query para determianr cunatps ´roductso llegan
  const limit = size || 10; //10 productos
  for(let index = 0; index <limit; index++){ //for con los limites
    products.push({
      name: faker.commerce.productName(), //Se crea nombre aletorio
      price: parseInt(faker.commerce.price(),10), //Se crea precio parseado a INt base 10
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});


app.get('/products/filter', (req,res)=>{
  res.send('Soy un filer')
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params.id;
  res.json({
    id,
    name: "Producto 2",
    price: 800
  })
});


app.get('/categories/:cateroryId/products/:productId', (req,res)=>{
  const { productId,cateroryId  } = req.params;
  res.json({
    cateroryId,
    productId
  });
});

app.get('/users', (req,res)=>{
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay parametros')
  }
});

app.listen(port, () => {
  console.log('Mi port ' + port)
});
