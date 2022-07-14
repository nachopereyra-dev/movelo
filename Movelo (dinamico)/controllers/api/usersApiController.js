const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')


const db = require('../../database/models')
const {Op} = require('sequelize');
const { url } = require('inspector');


const userController = {

    usersList: async (req, res) => {
        const usuarios = await db.Usuario.findAll({ attributes: ['id_user', 'first_name', 'last_name', 'email']})
                res.status(200).json({
                     total: usuarios.length,
                     data: usuarios,
                     detalle: (req, res) => {
                         fetch('http://localhost:3001/api/users/' + usuarios.id_user)
                         .then(response => response.json())
                     },
                     status: 200
            })
        },

    
    perfil: async (req, res) => {
        const usuarios = await db.Usuario.findByPk(req.params.id)
                res.status(200).json({ 
                    detalle_usuario: {
                        id: usuarios.id_user,
                        first_name: usuarios.first_name,
                        last_name: usuarios.last_name,
                        email: usuarios.email,
                        fecha: usuarios.date,
                        genero: usuarios.gender,
                    },  
                    url_imagen: {}, 
                })
            }

            }

module.exports = userController;