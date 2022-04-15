const fs = require('fs');
const path = require('path');
const { render } = require('../app');

const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
const listadoDeUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));


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
    },
    crearUsuario: (req, res) => {
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