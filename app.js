const express = require('express')
const app = express();

const path = require('path')

app.listen(4000, () => console.log('Servidor corriendo'))

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})