const request = require('supertest');
const app = require('../app');

describe('GET /products', () => {
    it('should return all products', async () => {
        const res = await request(app).get('/products');
        expect(res.body).toEqual([
            {id: 1, name: 'Laptop', price: 1000, stock: 5},
            {id: 2, name: 'Smartphone', price: 600, stock: 10}
          ]);
        expect(res.statusCode).toBe(200);
    });
});

describe('GET /products/:id', () => {
    it('should return a product by ID', async () => {
        const res1 = await request(app).get('/products/1');
        expect(res1.body).toEqual({id: 1, name: 'Laptop', price: 1000, stock: 5});
        expect(res1.statusCode).toBe(200);
        const res2 = await request(app).get('/products/2');
        expect(res2.body).toEqual({id: 2, name: 'Smartphone', price: 600, stock: 10});
        expect(res2.statusCode).toBe(200);

    });
    it('should return 404 if product not found', async () => {
        const res = await request(app).get('/products/3');
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toEqual('Product not found');
    });
});

describe('POST /products', () => {
    const newProduct = {
        id: 3, name: 'Smartwatch', price: 3000, stock: 1
    }
    it('should add a new product', async () => {
        const res = await request(app).post('/products').send(newProduct)
        expect(res.status).toBe(201);
        expect(res.body).toEqual(newProduct);
    });
});

describe('PUT /products/:id', () => {
    const newProduct = {
        id: 1, name: 'SmartTV', price: 30000, stock: 10
    }
    it('should update an existing product', async () => {
        const res = await request(app).put('/products/1').send(newProduct);
        expect(res.status).toBe(200);
        expect(res.body).toEqual(newProduct);
    });
    it('should return 404 if product not found', async () => {
        const res = await request(app).put('/products/999').send(newProduct);
        expect(res.status).toBe(404);
        expect(res.body.message).toEqual('Product not found');
    });
});

describe('DELETE /products/:id', () => {
    it('should delete a product', async () => {
        const res = await request(app).delete('/products/1');
        expect(res.status).toBe(200);
        expect(res.body.message).toEqual('Product deleted');
    });
    it('should return 404 if product not found', async () => {
        const res = await request(app).delete('/products/999');
        expect(res.status).toBe(404);
        expect(res.body.message).toEqual('Product not found');
    });
});