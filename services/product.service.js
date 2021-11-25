/* eslint-disable no-undef */
const faker = require('faker');
class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 100; //100 productos
    for (let index = 0; index < limit; index++) { //for con los limites
      this.products.push({
        id: faker.datatype.uuid(), //Se genera un id
        name: faker.commerce.productName(), //Se crea nombre aletorio
        price: parseInt(faker.commerce.price(), 10), //Se crea precio parseado a INt base 10
        image: faker.image.imageUrl(),
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(), //Se genera un id
      ...data //... concatena los valores que el usario va a usar
    }
    this.products.push(newProduct);
    return newProduct;
  }
  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item=> item.id === id);
  }
  update(id, changes) {
    const index = this.products.findIndex(item=> item.id === id);
    if(index === -1){ //si index no encuentra el elemento
      throw new Error('Product not found')
    }
    const product =  this.products[index];
    this.products[index] = {
      ...product, //Persistan los datos de los atributos
      ...changes //aplicar neuvos cambios
    };
    return this.products[index];

  }
  delete(id) {
    const index = this.products.findIndex(item=> item.id === id);
    if(index === -1){ //si index no encuentra el elemento
      throw new Error('Product not found')
    }
    this.products.splice(index,1); //Envia una pocision y cuantos elmentos eliminar a parti de lla
    return {id};
  }
}

module.exports = ProductsService
