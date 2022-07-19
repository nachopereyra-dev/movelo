const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
const Services = require('../../database/models/Services');
const Op = db.Sequelize.Op

const productosController = {

	listar: async (req, res) => {
        const servicios = await db.Services.findAll({ attributes: ['id_service', 'id_user', 'origen', 'destination', 'description'], include: [{association: "usuarios"}]})   
        const categoriaEnvio = await db.CategoriaEnvio.findAll()
        const serviciosLocales = await db.Services.findAll({where: { id_shipment_category: 1}})
        const serviciosInternacionales = await db.Services.findAll({where: { id_shipment_category: 2}})
        const frecuenciaDiaria = await db.Services.findAll({where: { id_frequency: 1}})
        const frecuenciaSemanal = await db.Services.findAll({where: { id_frequency: 2}})
        const frecuenciaMensual = await db.Services.findAll({where: { id_frequency: 3}})


        for (let i=0; i < servicios.length; i++){
            servicios[i].dataValues.tipo_de_envio = categoriaEnvio
            servicios[i].dataValues.detail = 'http://localhost:3001/api/servicios/'+servicios[i].id_service
            servicios[i].dataValues.usuarios.image = 'http://localhost:3001/images/avatars/'+servicios[i].dataValues.usuarios.image
        }
        res.status(200).json({
            total: servicios.length,
            countByCategory: { serviciosLocales: serviciosLocales.length , serviciosInternacionales: serviciosInternacionales.length},
            countByFrequency: { frecuenciaDiaria: frecuenciaDiaria.length, frecuenciaSemanal: frecuenciaSemanal.length, frecuenciaMensual: frecuenciaMensual.length},
            data: servicios,
            status: 200
        })
	},

	detalle: async (req, res) => {
		const servicio = await db.Services.findByPk(req.params.id)
        const categoriaEnvio = await db.CategoriaEnvio.findAll()
        const frecuenciaEnvio = await db.CategoriaEnvio.findAll() 
    
		res.status(200).json({ 
                id: servicio.id_service,
                id_user: servicio.id_user,
                origen: servicio.origen,
                destination: servicio.destination,
                id_shipment_category: categoriaEnvio,
                id_frequency: frecuenciaEnvio,
                weight: servicio.weight,
                height: servicio.height,
                width: servicio.width,
                price: servicio.price,
                description: servicio.description,  
            url_imagen: {}, 
        })
	},
	
}

module.exports = productosController;