const express = require('express')
const path = require('path')


const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

const port = process.env.PORT  || 3000 

app.use(express.static(publicDirectoryPath))

// app.get('/',(req,res)=>{
//     res.send("<h1>W<h1>")
// })

// app.listen(8080);
// console.log('Express server started');

app.listen(port, ()=>{
    console.log("server is running on port")
})