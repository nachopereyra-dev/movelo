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
        return res.redirect('perfil')
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

                if(req.body.recordarme) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60)*2 })
                }

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

    perfil: (req, res) => {
        res.render('users/perfil', {
            user: req.session.userLogged
        })
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    },
    
    adminCrear: (req, res) => {
        res.render("users/admin-crear", { user: req.session.userLogged})
    },
    adminEditar: (req, res) => {
        const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
        const listadoDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render("users/admin-elegir-editar", {articulos: listadoDeProductos, title: 'Express'})
    },
}

module.exports = userController;