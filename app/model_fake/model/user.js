'use strict';

const users = [
    {
        id: 1,
        username: 'simon',
        password: '123456',
    },
    {
        id: 2,
        username: 'esmio',
        password: '123456',
    }
];

class UserModel {
    async list() {
        return users;
    }
    async addOne(product) {
        if(!product.id || !product.name) throw Error('invalid product');
        users.push(product);
    }

    async getOneById(id) {
        const product = users.find(p => p.id === Number(id));
        return product;
    }

    async login(username, password) {
        const u = users.find(u => u.username === username && u.password === password);
        return u;
    }

    async isUserValid(userId) {
        const user =  await this.getOneById(userId);
        return !!user;
    }
}

module.exports = UserModel;