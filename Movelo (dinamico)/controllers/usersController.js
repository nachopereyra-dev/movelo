const fs = require('fs');
const path = require('path');
const { render } = require('../app');

const productosFilePath = path.join(__dirname, '../data/productosDataBase.json');
const listadoDeProductos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));


const userController = {
    login: (req, res) => {
        res.render("users/login", { title: 'Express' })
    },
    registro: (req, res) => {
        res.render("users/registro", { title: 'Express' })
    },
    adminCrear: (req, res) => {
        res.render("users/admin-crear", { title: 'Express' })
    },
    adminEditar: (req, res) => {
        res.render("users/admin-editar", { title: 'Express' })
    }
}

module.exports = userController;