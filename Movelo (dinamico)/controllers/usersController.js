const fs = require('fs');
const path = require('path');
const { render } = require('../app');
const { validationResult } = require('express-validator')




const userController = {
    login: (req, res) => {
        return res.render("users/login")
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
            const listadoDeUsuarios = fs.readFileSync(usuariosFilePath, 'utf-8');
            let usuarios;
            if (listadoDeUsuarios == '') {
                usuarios = [];
            } else {
                usuarios = JSON.parse(listadoDeUsuarios);
            }

            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].email == req.body.email) {
                    if (req.body.password == usuarios[i].password) {
                        usuarioALoguearse = usuarios[i];
                        break;
                    }
                }
            }

            if (usuarioALoguearse == undefined) {
                return res.render('login', {errors: [
                    {msg: 'Credenciales invalidas'}
                ]})
            }

            req.session.usuarioLogueado = usuarioALoguearse;
            res.send('sucess!')
        } else {
            return res.render('users/login', { errors: errors.mapped()})
        }
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

        let errors = validationResult(req);
        if(errors.isEmpty()) {
            let nuevoUsuario = {
                id: listadoDeUsuarios.length + 1,
                nombre: req.body.name,
                email: req.body.email,
                password: req.body.password,
                fecha: req.body.fecha,
                gender: req.body.gender,
            };
      
            listadoDeUsuarios.push(nuevoUsuario);
            fs.writeFileSync(usuariosFilePath,JSON.stringify(listadoDeUsuarios, null , ' '));
            res.render("users/registro");
        } else {
            res.render("users/registro", { errors: errors.mapped(), old: req.body })
        }
    },
}

module.exports = userController;