const express = require('express')
const app = express()
const port = 3000

//Modules
const entry_point = require('./entry-point')

app.get('/', entry_point)

app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))