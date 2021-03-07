const supertest = require('supertest')
const app = require('./server')


describe('App',()=>{
    it("returns plain text response",()=>{
        supertest(app)
        .get("/")
        .set("User-Agent","mozilla")
        .set("Accept","text/plain")
        .expect(200)
    })
})