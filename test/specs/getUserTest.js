import supertest from 'supertest';
import { expect } from 'chai';

describe('GET User API Test', () => {
    it('should return user with ID 2', async () => {
        const response = await supertest('https://dummyjson.com')
            .get('/users/2')
            .set('Accept', 'application/json');

        console.log('GET Response:', response.body);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id', 2);
        expect(response.body).to.have.property('firstName');
    });
});
