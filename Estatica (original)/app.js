const express = require('express')
const app = express();

const path = require('path')

app.listen(4000, () => console.log('Servidor corriendo'))

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/servicios', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})

app.get('/shop', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
})

app.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/registro', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})
