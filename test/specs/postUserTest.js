const supertest = require('supertest');
const expect = require('chai').expect;

describe('POST DummyJSON User API Test', () => {
    const request = supertest('https://dummyjson.com');

    it('should create a new user successfully', async () => {
        const response = await request
            .post('/users/add')
            .set('Content-Type', 'application/json')
            .send({
                firstName: 'Rishita',
                lastName: 'Sharma',
                age: 21
            });

        console.log('📦 Response Body:', response.body);

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        expect(response.body.firstName).to.equal('Rishita');
        expect(response.body.lastName).to.equal('Sharma');
    });
});
