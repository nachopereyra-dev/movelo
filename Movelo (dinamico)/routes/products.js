var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/servicios', productsController.servicios);
router.get('/carrito', productsController.carrito);

module.exports = router;
