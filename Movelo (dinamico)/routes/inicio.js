var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('inicio', { title: 'Express' });
//});

router.get('/', mainController.inicio);
router.get('/servicios', mainController.servicios);
router.get('/carrito', mainController.carrito);

module.exports = router;
