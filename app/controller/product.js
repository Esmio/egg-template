'use strict';

const Controller = require('egg').Controller;

// const ProductModel = require('../model/product');

// const productModel = new ProductModel();

class ProductController extends Controller {
  async index() {
    const products = await this.ctx.model.Product.list();
    this.ctx.body = {
      products,
    };
  }

  async getOneById() {
    const { id } = this.ctx.query;
    const product = await this.ctx.model.Product.getOneById(id);
    this.ctx.body = {
      product,
    };
  }

  async addOne() {
    const { product } = this.ctx.request.body;
    const created = await this.ctx.model.Product.addOne(product);
    this.ctx.body = {
      product: created,
    };
  }
}

module.exports = ProductController;
