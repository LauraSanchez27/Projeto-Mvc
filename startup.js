// Este arquivo guarda configurações
const express = require('express')
const app = express()
const consign = require('consign')

consign()
    .include('mvc/controllers')
    .into(app)


app.listen(3000, () => console.log('Online server at port 3000'))
module.exports = app

