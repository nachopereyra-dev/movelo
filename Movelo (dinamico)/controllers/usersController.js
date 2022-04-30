const fs = require('fs');
const path = require('path');
const { render } = require('../app');




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
        const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
        const listadoDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render("users/admin-elegir-editar", {articulos: listadoDeProductos, title: 'Express'})
    },
    crearUsuario: (req, res) => {
        const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
        const listadoDeUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

        let nuevoUsuario = {
            id: listadoDeUsuarios.length + 1,
            fisrt_name: req.body.Usuario,
            last_name: "",
            email: req.body.Correo,
        };
        console.log(req.body.password)
        // listadoDeUsuarios.push(nuevoUsuario);
		// fs.writeFileSync(productsFilePath,JSON.stringify(listadoDeUsuarios, null , ' '));
        res.render("inicio", { title: 'Express' });
    },
}

module.exports = userController;