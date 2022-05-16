const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')

const User = require('../models/User')


const userController = {

    registro: (req, res) => {
        res.render("users/registro", { title: 'Express' })
    },

    procesoRegistro: (req, res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
            return res.render('users/registro', {
                errors: resultValidation.mapped(),
                old: req.body
            });
        }

        let userInDB = User.findByField('email', req.body.email);

        if(userInDB) {
            return res.render('users/registro', {
                errors: {
                    email: {
                    msg: 'Este email ya está registrado'
                }
            },
                old: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = User.create(userToCreate);
        return res.render('users/login')
    },

    login: (req, res) => {
        return res.render("users/login")
    },

    procesoLogin: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if(userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('perfil')
            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales no son válidas'
                    }
                }
            })

        }

        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        })
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
            let usuarioALoguearse

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

            if (req.body.recordarme != undefined) {
                res.cookie('recordarme',
                usuarioALoguearse.email, { maxAge: 60000})
            }

            res.send('sucess!')
        } else {
            return res.render('users/login', { errors: errors.mapped()})
        }
    },

    perfil: (req, res) => {
        res.render('users/perfil', {
            user: req.session.userLogged
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
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