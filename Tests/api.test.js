const request = require('supertest');
const app= require('../app')

describe('Test the root path', () => {
    test('It should response the GET method', async(done) => {
      const result= await request(app).get('/api/check').send()
            expect(result.statusCode).toBe(200);
            done();

    });
});
