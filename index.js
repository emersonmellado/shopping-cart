const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//Middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))

//Modules
const home = require('./routes/home')
const categories = require('./routes/categories')
const adminIndex = require('./routes/admin/index')
const adminCreate = require('./routes/admin/create')

app.get('/', home)
app.get('/categories', categories)
app.get('/admin', adminIndex)
app.get('/admin/create', adminCreate)

app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))