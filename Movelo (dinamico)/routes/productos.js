var express = require('express');
var router = express.Router();
var multer = require('multer');
const productosController = require('../controllers/productosController');

/**** GETs de Productos ****/
router.get('/', productosController.servicios);
router.get('/carrito', productosController.carrito);
router.get('/:id/detalle', productosController.detalle);

/**** POSTs de Productos ****/
router.post('/', productosController.adminCrearPOST)

module.exports = router;
