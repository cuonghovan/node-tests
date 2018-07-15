const request = require('supertest');
const app = require('./server').app;

it ('should return \"Hello world\" text when visit route \"/\"', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Hello world')
    .end(done);
});

it ('should return users when visit route \"/users\"', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
        expect(res.body).toContainEqual({
            name: 'bob',
            age: 28
        });
    })
    .end(done);
});

