'use strict';

const carts = [
    // {
    //     id: 1, 
    //     userId: 1,
    //     products: [
    //         {
    //             productId: 1,
    //             amount: 2,
    //         }
    //     ]
    // }
];

class CartModel {
    async list() {
        return carts;
    }

    async getOneByUserId(userId) {
        const found =  carts.find(p => p.userId === Number(userId));
        if(found) return found;
        const newCart = {
            userId,
            products: [],
        }
        carts.push(newCart);
        return newCart;
    }

    async addProductToCart(userId, productId, amount) {
        const cart =  await this.getOneByUserId(userId);
        const found = cart.products.find(p => p.productId === productId);
        if (found) {
            found.amount += amount;
        } else {
            cart.products.push({
                productId,
                amount,
            })
        }
        return cart;
    }

    async removeProductFromCart(userId, productId) {
        const cart =  await this.getOneByUserId(userId);
        const index = cart.products.findIndex(p => p.productId === productId);
        if (index > -1) {
            cart.products.splice(index, 1);
        }
    }

    async addOne(product) {
        if(!product.id || !product.name) throw Error('invalid product');
        carts.push(product);
    }

    async getOneById(id) {
        const cart = carts.find(p => p.id === Number(id));
        return cart;
    }
}

module.exports = CartModel;