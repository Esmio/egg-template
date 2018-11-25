'use strict';

const products = [
  {
    id: 1,
    name: '商品1',
    priceInCents: 10,
  },
  {
    id: 2,
    name: '商品2',
    priceInCents: 30,
  },
  {
    id: 3,
    name: '商品3',
    priceInCents: 50,
  },
];

class ProductModel {
  async list() {
    return products;
  }
  async addOne(product) {
    if (!product.id || !product.name) throw Error('invalid product');
    products.push(product);
  }

  async getOneById(id) {
    const product = products.find(p => p.id === Number(id));
    return product;
  }
}

module.exports = ProductModel;
