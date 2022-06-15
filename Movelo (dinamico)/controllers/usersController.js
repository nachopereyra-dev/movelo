const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')

const db = require('../database/models')
const {Op} = require('sequelize')

const userController = {

    registro: async (req, res) => {
       const categoriasUsuario = await db.CategoriaUsuario.findAll({where: { [Op.or]: [{name: 'Vendedor'}, {name: 'Comprador'}] }})
        res.render("users/registro", { categoriasUsuario } )
    },

    procesoRegistro: async (req, res) => {
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0) {
            return res.render('users/registro', {
                errors: resultValidation.mapped(),
                old: req.body
            })} 
        else {
            const userInDB = await db.Usuario.findOne({ where: { email: req.body.email } });
            
            if(userInDB) {
                return res.render('users/registro', {
                    errors: {
                        email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                    old: req.body
                })} 
            else {
                const userToCreate = {
                    ...req.body,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    image: req.file ? req.file.filename : 'default.png',
                    id_user_category: Number(req.body.usuarioTipo)
                }

                await db.Usuario.create(userToCreate);
                return res.redirect('perfil')
            }
        }
        },


    login: (req, res) => {
        return res.render("users/login")
    },

    procesoLogin: async (req, res) => {
        const userToLogin = await db.Usuario.findOne({ where: { email: req.body.email } });

        if(userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.recordarme) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60)*30 })
                }

                return res.redirect('perfil')

            } else {
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales no son válidas'
                        }
                    }
                })    
            } 
        } else {

        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        })}
    },

    perfil: (req, res) => {
        res.render('users/perfil', {
            user: req.session.userLogged
        })
    },

    misServicios: (req, res) => {
        res.render("users/mis-servicios", { user: req.session.userLogged})
    },

    crearServicio: (req, res) => {
        db.CategoriaEnvio.findAll()
            .then(tipoDeEnvio => {
                return res.render('users/admin-crear', { tipoDeEnvio: tipoDeEnvio, user: req.session.userLogged})
            })
	},

    guardarServicio: (req, res) => {
        db.Services.create({
            origen: req.body.origen,
            destination: req.body.destino,
            id_shipment_category: req.body.tipoDeEnvio,
            id_frequency: req.body.frecuencia,
            weight: req.body.peso,
            height: req.body.altura,
            width: req.body.ancho,
            description: req.body.descripcion,
            price: req.body.precio
        })
        res.redirect('mis-servicios')
    },

    admin: (req, res) => {
        res.render("users/admin", { user: req.session.userLogged})
    },

    servicesList: (req, res) => {
        db.Services.findAll()
            .then(function(servicios) {
                res.render('users/admin-lista-servicios', {servicios:servicios, user: req.session.userLogged})
            })
    },

    usersList: (req, res) => {
       
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