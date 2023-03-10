const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Home page from Node & Express')
})

app.get('/admin',(req,res)=>{
    res.send('Admin page from Node & Express')
})

app.listen(3000,()=>console.log('Server Running'))