const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3000

//Middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Database connection
let uri = "mongodb://shoppingcart:shoppingcart1234@cluster0-shard-00-00-tuwa5.mongodb.net:27017,cluster0-shard-00-01-tuwa5.mongodb.net:27017,cluster0-shard-00-02-tuwa5.mongodb.net:27017/shoppingcart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Modules
const home = require('./routes/home')
const categories = require('./routes/categories')
const adminIndex = require('./routes/admin/index')
const adminCreate = require('./routes/admin/create')
const adminCreatePost = require('./routes/admin/createPost')
const adminUpdate = require('./routes/admin/update')
const adminDelete = require('./routes/admin/delete')

app.get('/', home)
app.get('/categories', categories)
app.get('/admin', adminIndex)
app.get('/admin/create', adminCreate)
app.post('/admin/create', adminCreatePost)
app.get('/admin/update', adminUpdate)
app.get('/admin/delete/:id', adminDelete)

app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))