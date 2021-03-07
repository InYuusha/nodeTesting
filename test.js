const supertest = require('supertest')
const app = require('./server')


describe('App',()=>{

    let request
 beforeEach(()=>{
     request = supertest(app)
     .get('/')
     .set('User-Agent','mozilla')
     .set('Accept','text/plain')
 })

 it("returns a hello world",(done)=>{
     request
     .expect((res)=>{
         if(res.text!=="Hello world"){
             throw new Error("Not sending hello world")
         }
         

     })
     .end(done)

 })
})