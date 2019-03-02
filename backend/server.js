/**
 * Arquivo: server.js
 * Autor: Kevin Uehara
 * Descrição: Arquivo responsável pelo servidor node
 * Data: 27/02/2019
 */

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
var port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

require('./src/controllers/userController')(app)

app.listen(port, () => {
    console.log(`Running server on port: ${port}`)
})