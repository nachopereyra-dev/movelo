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
        for (let usuario of usuarios){
            usuario.dataValues.detail = 'http://localhost:3001/api/users/'+usuario.id_user
        };
        res.status(200).json({
            count: usuarios.length,
            data: usuarios,               
            status: 200
        })
    },

    
    perfil: async (req, res) => {
        const usuario = await db.Usuario.findByPk(req.params.id, {attributes: ['id_user', 'first_name', 'last_name', 'email', 'date', 'gender', 'image'] } )
        usuario.image = 'http://localhost:3001/api/users/'+ usuario.image;
        res.status(200).json({
            id_user: usuario.id_user,
            first_name: usuario.first_name,
            last_name: usuario.last_name,
            email: usuario.email,
            date: usuario.date,
            gender: usuario.gender,
            imagen: usuario.image
        })
    }

}

module.exports = userController;