const express = require('express')
const path = require('path')


const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

// app.get('/',(req,res)=>{
//     res.send("<h1>W<h1>")
// })

app.listen(8080);
console.log('Express server started');