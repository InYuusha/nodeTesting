const supertest = require('supertest')
const app = require('./server')
const cheerio = require('cheerio')


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
         let htmlRes = res.text
         $ = cheerio.load(htmlRes)
         text =$('h1').html().trim()
         if(text!="Hello World"){
             throw new Error("Not a hello world html text")
         }
         
     })
     .end(done)

 })


})