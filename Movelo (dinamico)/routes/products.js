var express = require('express');
var router = express.Router();
var multer = require('multer');
const productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/servicios', productsController.servicios);
router.get('/carrito', productsController.carrito);
router.get('/:id/detalle', productsController.detalle);

module.exports = router;
