const express = require('express')
const app = express()

//config


//routes
app.get('/',(req,res)=>{
    res.send('Hello world')
})


//listen
app.listen(3000,()=>console.log("server is running on port 3000"))

module.exports = app