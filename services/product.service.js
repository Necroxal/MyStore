/* eslint-disable no-undef */
const faker = require('faker');
const boom =  require('@hapi/boom');
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

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(), //Se genera un id
      ...data //... concatena los valores que el usario va a usar
    }
    this.products.push(newProduct);
    return newProduct;
  }
  find() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    })
  }

  async findOne(id) {

    const product = this.products.find(item => item.id === id);
    if(!product){
      throw boom.notFound('Product not found');
    }
    return product;
  }
  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) { //si index no encuentra el elemento
      throw boom.notFound('Product not found'); //mandar error de boom libreria
    }
    const product = this.products[index];
    this.products[index] = {
      ...product, //Persistan los datos de los atributos
      ...changes //aplicar neuvos cambios
    };
    return this.products[index];

  }
  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) { //si index no encuentra el elemento
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1); //Envia una pocision y cuantos elmentos eliminar a parti de lla
    return {
      id
    };
  }
}

module.exports = ProductsService
