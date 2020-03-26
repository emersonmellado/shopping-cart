const express = require('express')
const app = express()
const port = 3000

//Middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))

//Modules
const entry_point = require('./routes/entry-point')
const categories = require('./routes/categories')

app.get('/', entry_point)
app.get('/categories', categories)

app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))