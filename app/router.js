'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/getonebyid', controller.product.getOneById);
  router.post('/product/addone', controller.product.addOne);
  router.post('/cart/addProductToCart', app.middleware.auth(), controller.cart.addProductToCart);
  router.post('/user/login', controller.user.login);
};
