const chai = require('chai')
const expect = chai.expect
const capitalize = require('./capitalize')




describe("capitalize",()=>{

    it("capitalizes single word",()=>{
        expect(capitalize("say")).to.equal("Say")
    })
    
    it("capitalizes multiple words",()=>{
        expect(capitalize("hello world wassup")).to.equal("Hello World Wassup")
    })
    it("capitalizes lowercase and ignore uppercase",()=>{
        expect(capitalize("hello World Wassup")).to.equal("Hello World Wassup")
    })
    it("capitalizes lowercase and lower the uppercase",()=>{
        expect(capitalize("hELLo wOrld waSSup")).to.equal("Hello World Wassup")
    })
    it("it throws error if passed a non-str",()=>{
        expect(capitalize('foo')).not.to.equal('foo')
    })
})


