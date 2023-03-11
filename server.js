const express = require('express')

const app = express()
const {MongoClient} = require('mongodb')
let db 

app.get('/', async (req,res)=>{
    const allData = await db.collection('animals').find().toArray()

    console.log(allData);
    res.send(allData)
})

app.get('/admin', async (req,res)=>{
    // res.send(allData)
})

async function connectMongoDb (){
    const client = new MongoClient('mongodb+srv://motaz:motazadmin@ecommerce.tpldgax.mongodb.net/?retryWrites=true&w=majority')
    await client.connect()
    db = client.db('MernApp')
    console.log('Connected to DB');
    app.listen(3000,()=>console.log('Server Running'))

}
connectMongoDb()
