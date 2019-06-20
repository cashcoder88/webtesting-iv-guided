const server = require('./server.js')

const supertest = require('supertest')

describe('server', () => {
    describe('GET', () => {
        //returning promise
        // Luis preference 
        it('responds with 200 OK', () => {
           return supertest(server).get('/').expect(200)
        });
        //using squad
        it('responds with 200 OK', async () => {
            await supertest(server).get('/').expect('Content-Type', /json/i)
         });

         it('responds {api: "up"} ', async () => {
             await supertest(server)
             .get('/')
             .then(res => {
                 expect(res.body).toEqual({
                     api: 'up'
                 })
             })
         });
         it('correct status', (done) => {
             supertest(server)
             .get('/')
             .expect(200, done)
         });
    });
});
// three ways to do this
// 1. Return the promise to Jest
// 2. Content Type Check, w/ Async Await 
// 3.  Done operator is on TK