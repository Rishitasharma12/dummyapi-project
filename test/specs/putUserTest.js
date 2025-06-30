const supertest = require('supertest');
const expect = require('chai').expect;

describe('PUT DummyJSON User API Test', () => {
    const request = supertest('https://dummyjson.com');

    it('should update an existing user successfully', async () => {
        const response = await request
            .put('/users/1') // updating user with ID 1
            .set('Content-Type', 'application/json')
            .send({
                firstName: 'UpdatedName',
                age: 25
            });

        console.log('📝 Response Body:', response.body);

        expect(response.status).to.equal(200); // PUT usually returns 200
        expect(response.body.firstName).to.equal('UpdatedName');
        expect(response.body.age).to.equal(25);
    });
});
