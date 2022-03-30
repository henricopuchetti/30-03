const consign = require('consign');
const express = require('express');
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.static('./'))

consign().include('./routes').into(app)

const porta = process.env.PORT || 4545

module.exports = {app, porta}