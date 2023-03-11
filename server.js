const express = require('express')
const app = express()
var cors = require('cors')
const {MongoClient} = require('mongodb')
let db ;

app.use(cors())

app.set("view engine","ejs")
app.set("views","./views")
app.use(express.static('public'))

app.get('/', async (req,res)=>{
    const allData = await db.collection('animals').find().toArray()
    res.send(allData)
})

app.get('/admin', async (req,res)=>{
    const allData = await db.collection('animals').find().toArray()
    res.json(allData)
})

// app.get('/api/items', async (req,res)=>{
// })

async function connectMongoDb (){
    const client = new MongoClient('mongodb+srv://motaz:motazadmin@ecommerce.tpldgax.mongodb.net/?retryWrites=true&w=majority')
    await client.connect()
    db = client.db('MernApp')
    console.log('Connected to DB');
    app.listen(3000,()=>console.log('Server Running'))

}
connectMongoDb()
