var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('inicio', { title: 'Express' });
//});

router.get('/', mainController.index);
router.get('/servicios', mainController.servicios);
router.get('/shop', mainController.shop);
router.get('/login', mainController.login);
router.get('/registro', mainController.registro)

module.exports = router;
