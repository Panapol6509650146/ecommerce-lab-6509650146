const request = require('supertest');
const app = require('../app');

describe('GET /products', () => {
    it('should return all products', async () => {
        //use get method to get all product from app.js
        const res = await request(app).get('/products');
        //check product from response by using toEqual 
        expect(res.body).toEqual([
            {id: 1, name: 'Laptop', price: 1000, stock: 5},
            {id: 2, name: 'Smartphone', price: 600, stock: 10}
          ]);
        //check statusCode ok form response
        expect(res.statusCode).toBe(200);
    });
});

describe('GET /products/:id', () => {
    
    it('should return a product by ID', async () => {
        //use get method to get product by id 1 from app.js
        const res1 = await request(app).get('/products/1');
        //check product from response by using toEqual 
        expect(res1.body).toEqual({id: 1, name: 'Laptop', price: 1000, stock: 5});
        //check statusCode ok form response
        expect(res1.statusCode).toBe(200);
        //use get method to get product by id 2 from app.js
        const res2 = await request(app).get('/products/2');
        //check product from response by using toEqual
        expect(res2.body).toEqual({id: 2, name: 'Smartphone', price: 600, stock: 10});
        //check statusCode ok form response
        expect(res2.statusCode).toBe(200);

    });

    it('should return 404 if product not found', async () => {
        //use get method to get product by id 3 because id 3 is invalid
        const res = await request(app).get('/products/3');
        //check statusCode error form response
        expect(res.statusCode).toBe(404);
        //check error response message by using toEqual
        expect(res.body.message).toEqual('Product not found');
    });
});

describe('POST /products', () => {
    //create object newProduct 
    const newProduct = {
        id: 3, name: 'Smartwatch', price: 3000, stock: 1
    }
    it('should add a new product', async () => {
        //use post use newProduct to app.js
        const res = await request(app).post('/products').send(newProduct)
        //check statusCode form response
        expect(res.status).toBe(201);
        //check newProduct form response
        expect(res.body).toEqual(newProduct);
    });
});

//failed
describe('POST /products', () => {
    //create object newProduct 
    const newProduct = {
        id: 3, name: 'Smartwatch', price: 3000, stock: 1
    }
    it('should add a new product', async () => {
        //use post use newProduct to app.js
        const res = await request(app).post('/products').send(newProduct)
        //check statusCode form response
        expect(res.status).toBe(200);
        //check newProduct form response
        expect(res.body).toEqual(newProduct);
    });
});

describe('PUT /products/:id', () => {
    //object to update
    const newProduct = {
        id: 1, name: 'SmartTV', price: 30000, stock: 10
    }
    const newProduct2 = {
        id: 1, price: 30000, stock: 10
    }
    const newProduct3 = {
        id: 1, stock: 10
    }
    const newProduct4 = {
        id: 1, price: 30000
    }
    it('should update an existing product', async () => {
        //use put method to update newProduct by id 1 from app.js 
        const res = await request(app).put('/products/1').send(newProduct);
        //check statusCode ok form response
        expect(res.status).toBe(200);
        //check update newProduct form response
        expect(res.body).toEqual(newProduct);

        //use put method to update newProduct by id 1 from app.js 
        const res2 = await request(app).put('/products/1').send(newProduct2);
        //check statusCode ok form response
        expect(res2.status).toBe(200);
        //check update newProduct form response
        expect(res2.body).toEqual(newProduct);

        //use put method to update newProduct by id 1 from app.js 
        const res3 = await request(app).put('/products/1').send(newProduct3);
        //check statusCode ok form response
        expect(res3.status).toBe(200);
        //check update newProduct form response
        expect(res3.body).toEqual(newProduct);

        //use put method to update newProduct by id 1 from app.js 
        const res4 = await request(app).put('/products/1').send(newProduct4);
        //check statusCode ok form response
        expect(res4.status).toBe(200);
        //check update newProduct form response
        expect(res4.body).toEqual(newProduct);
    });
    it('should return 404 if product not found', async () => {
        //use put method to update newProduct by id 999 from app.js for error response 
        const res = await request(app).put('/products/999').send(newProduct);
        //check statusCode error form response
        expect(res.status).toBe(404);
        //check error response message by using toEqual
        expect(res.body.message).toEqual('Product not found');
    });
});

describe('DELETE /products/:id', () => {
    it('should delete a product', async () => {
        //use delete method to delete newProduct by id 1 from app.js 
        const res = await request(app).delete('/products/1');
        //check statusCode ok form response
        expect(res.status).toBe(200);
         //check response message by using toEqual
        expect(res.body.message).toEqual('Product deleted');
    });
    it('should return 404 if product not found', async () => {
        //use delete method to delete product by id 999 from app.js for error response 
        const res = await request(app).delete('/products/999');
        //check statusCode error form response
        expect(res.status).toBe(404);
        //check error response message by using toEqual
        expect(res.body.message).toEqual('Product not found');
    });
});