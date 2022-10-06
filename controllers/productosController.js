const db = require('../database/models');
const Op = db.Sequelize.Op

const productosController = {

	listar: async (req, res) => {
		const servicios = await db.Services.findAll()
		res.render("servicios/servicios", {servicios, user: req.session.userLogged})

	},

	search: async (req, res) => {
		const servicios = await db.Services.findAll({ where: {
			origen: {[Op.like]: '%'+req.body.origen+'%' }, destination: {[Op.like]: '%'+req.body.destination+'%'}
		}})
			res.render('servicios/servicios', {servicios, user: req.session.userLogged, origen:req.body.origen, destination:req.body.destination })
	},

	detalle: async (req, res) => {
		const servicio = await db.Services.findByPk(req.params.id)
		res.render('servicios/detalle', {servicio, user: req.session.userLogged })
	},

	perfil: async (req, res) => {
		const servicios = await db.Services.findAll()
		res.render('servicios/perfil-publico', {servicios, user: req.session.userLogged })
	}
}

module.exports = productosController;