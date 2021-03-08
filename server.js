const express = require('express')
const app = express()
const path = require('path')

//config

app.use('/hello',express.static('public'))

//routes
app.get("/",(req,res)=>{
    res.send("Hello world")
})


//listen
app.listen(3000,()=>console.log("server is running on port 3000"))

module.exports = app