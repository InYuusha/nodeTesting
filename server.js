const express = require('express')
const app = express()
const path = require('path')

//config



//routes
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.get("/hello",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})


//listen
app.listen(3000,()=>console.log("server is running on port 3000"))

module.exports = app