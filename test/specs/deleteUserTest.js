const supertest = require('supertest');
const expect = require('chai').expect;

describe('DELETE DummyJSON User API Test', () => {
    const request = supertest('https://dummyjson.com');

    it('should delete an existing user successfully', async () => {
        const response = await request
            .delete('/users/1') // deleting user with ID 1
            .set('Content-Type', 'application/json');

        console.log('🗑️ Response Body:', response.body);

        expect(response.status).to.equal(200); // Successful deletion returns 200
        expect(response.body).to.have.property('id'); // confirms user ID is returned
    });
});
