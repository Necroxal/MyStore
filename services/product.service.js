//Libreria kajer crea datos flasos
const faker = require('faker');
//manejo de errores con boom
const boom = require('@hapi/boom');

//Contructor
class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }
//genera los datos. Se establecieron 100 items con todos los atributos

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
//funcion asincrona de
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }
//buscar por id
  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    //se encontro la poscision
    const index = this.products.findIndex(item => item.id === id);
    //Si no lo encuentra
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    //
    this.products[index] = {
      ...product,
      ...changes
    };
    //returna objeto modificado
    return this.products[index];
  }

  async delete(id) {
    //busca un elemento
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    //splice permite enviar una posicion y eliminarla en este caso, se elimina 1 (el mismo)
    this.products.splice(index, 1);
    //returna id
    return { id };
  }

}

module.exports = ProductsService;
