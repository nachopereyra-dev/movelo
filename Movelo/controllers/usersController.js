const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')

const db = require('../database/models')
const {Op} = require('sequelize')

const userController = {

    registro: async (req, res) => {
       const categoriaUsuario = await db.CategoriaUsuario.findAll({where: { [Op.or]: [{name: 'Vendedor'}, {name: 'Comprador'}] }})
       res.render("users/registro", { categoriaUsuario } )
    },

    procesoRegistro: async (req, res) => {

        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            const categoriaUsuario = await db.CategoriaUsuario.findAll({where: { [Op.or]: [{name: 'Vendedor'}, {name: 'Comprador'}] }})
            return res.render('users/registro', { categoriaUsuario,
                errors: resultValidation.mapped(),
                old: req.body
            })} 
            
        else {

            const userInDB = await db.Usuario.findOne({ where: { email: req.body.email }});

            if(userInDB) {
                const categoriaUsuario = await db.CategoriaUsuario.findAll({where: { [Op.or]: [{name: 'Vendedor'}, {name: 'Comprador'}] }})
                return res.render('users/registro', { categoriaUsuario,
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
                    id_user_category: Number(req.body.id_user_category),
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
                            msg: 'Contraseña o usuario'
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

    procesoLoginVerification: async (req, res) => {
        let verifyEmailPass = await db.Usuario.findOne({ where: { email: req.params.user } })
        let validationCheck = {}
        
        if (verifyEmailPass) {
            validationCheck.email = true
            bcryptjs.compareSync(req.params.pass, verifyEmailPass.password) ? validationCheck.pass = true : validationCheck.pass = false 
        } else {
            validationCheck.email = false
            validationCheck.pass = false
        }
        res.send(validationCheck)        
    },

    perfil: async (req, res) => {
        const IdUsuarioEnSesion = req.session.userLogged.id_user
        const usuario = await db.Usuario.findByPk(IdUsuarioEnSesion, {
            include: [{association: "categoriaU"}]
        })
        
        res.render('users/perfil', {usuario, user: req.session.userLogged})
    },

    editarPerfil: async (req, res) => {
        const IdUsuarioEnSesion = req.session.userLogged.id_user
        const usuario = await db.Usuario.findByPk(IdUsuarioEnSesion)
        const categoriaUsuario = await db.CategoriaUsuario.findAll({where: { [Op.or]: [{name: 'Vendedor'}, {name: 'Comprador'}] }})

            res.render('users/editar-perfil', { usuario, categoriaUsuario, user: req.session.userLogged })
    },

    actualizarPerfil: async(req, res) => {
        await db.Usuario.update({            
            ...req.body,
            image: req.file ? req.file.filename : req.session.userLogged.image
        },
        {
            where: {
                id_user: req.params.id
            }
        });
        const userEnSesion = await db.Usuario.findOne({ where: { email: req.body.email } });
        delete userEnSesion.password;
        req.session.userLogged = userEnSesion;

        res.redirect('/users/perfil/')
    },

    misServicios: async (req, res) => {
            const IdUsuarioEnSesion = req.session.userLogged.id_user
            const misServicios = await db.Services.findAll({where: { id_user: IdUsuarioEnSesion }});
                res.render("users/mis-servicios", {misServicios, user: req.session.userLogged})
    },

    detalle: async (req, res) => {
        const servicio = await db.Services.findByPk(req.params.id, { include: [{association: 'categoriaE'}, {association: 'frecuenciaE'}]})
            res.render('users/servicio-detalle', {servicio, user: req.session.userLogged})
    },

    crearServicio: async (req, res) => {
        const categoriaEnvio = await  db.CategoriaEnvio.findAll()
        const frecuenciaEnvio = await db.FrecuenciaEnvio.findAll()

                res.render('users/crear-servicio', {categoriaEnvio, frecuenciaEnvio, user: req.session.userLogged})
	},

    guardarServicio: async (req, res) => {

        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
            const categoriaEnvio = await  db.CategoriaEnvio.findAll()
            const frecuenciaEnvio = await db.FrecuenciaEnvio.findAll()
            return res.render('users/crear-servicio', { user: req.session.userLogged, categoriaEnvio, frecuenciaEnvio,
                errors: resultValidation.mapped(),
                old: req.body
            })} 
            else {

        db.Services.create({
            id_user: req.session.userLogged.id_user,
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
    }},

    editar: async (req, res) => {
        const servicio = await db.Services.findByPk(req.params.id)
        const categoriaEnvio = await  db.CategoriaEnvio.findAll()
        const frecuenciaEnvio = await db.FrecuenciaEnvio.findAll()

            res.render('users/editar-servicio', {servicio, categoriaEnvio, frecuenciaEnvio, user: req.session.userLogged})

    },

    actualizar: async (req, res) => {

        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
            const servicio = await db.Services.findByPk(req.params.id)
            const categoriaEnvio = await  db.CategoriaEnvio.findAll()
            const frecuenciaEnvio = await db.FrecuenciaEnvio.findAll()
            return res.render('users/editar-servicio', { servicio, user: req.session.userLogged, categoriaEnvio, frecuenciaEnvio,
                errors: resultValidation.mapped(),
                old: req.body
            })} 
            else { 

        db.Services.update({
            origen: req.body.origen,
            destination: req.body.destino,
            id_shipment_category: req.body.tipoDeEnvio,
            id_frequency: req.body.frecuencia,
            weight: req.body.peso,
            height: req.body.altura,
            width: req.body.ancho,
            description: req.body.descripcion,
            price: req.body.precio
        }, { 
            where: {
                id_service: req.params.id
        }}
        );
        res.redirect('/users/mis-servicios/' + req.params.id)
    }},

    borrar: (req, res) => {
        db.Services.destroy({ where: {
            id_service: req.params.id
        }})

        res.redirect('/users/mis-servicios')
    },

    admin: (req, res) => {
        res.render("users/admin", { user: req.session.userLogged})
    },

    servicesList: async (req, res) => {
        const servicios = await db.Services.findAll()
            res.render('users/admin-lista-servicios', {servicios, user: req.session.userLogged})
            },

    usersList: async (req, res) => {
       const usuarios = await db.Usuario.findAll()
                res.render('users/admin-lista-usuarios', { usuarios, user: req.session.userLogged})
            },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }
}

module.exports = userController;