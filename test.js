const supertest = require('supertest')
const app = require('./server')


describe('App',()=>{

    let request


 it("returns a hello world text",(done)=>{
     supertest(app)
     .get('/')
     .set('Accept','text/plain')
     .expect((res)=>{
         if(res.text!=="Hello world"){
             throw new Error("Not sending hello world")
         }
         

     })
     .end(done)

 })
 it("returns a hello world html",(done)=>{
     supertest(app)
     .get("/hello")
     .set("Accept","text/html")
     .expect("Content-Type",/html/)
     .expect((res)=>{
         console.log(res.text)
     })
     .end(done)

 })


})