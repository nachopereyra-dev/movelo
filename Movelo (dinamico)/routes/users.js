var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController');

/* GET users listing. */
router.get('/login', userController.login);
router.get('/registro', userController.registro);
router.get('/admin', userController.admin);

module.exports = router;
