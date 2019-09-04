const assert = require('chai').assert;
const app = require('../app')
const supertest = require('supertest')


describe('Unique route', () =>{
  it('Route should return 200 ', (done) =>{
    supertest(app).get('/api/weather/-23.55052,-46.633309')
    .expect(200, done)
    
  })
})