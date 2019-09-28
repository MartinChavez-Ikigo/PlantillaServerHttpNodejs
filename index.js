
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//const db = require('./queries')
const port = 3005

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.listen(port, () => console.log(`Web service escuchando por puerto index ${port}`)) 