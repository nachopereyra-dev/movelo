var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController');

/* GET users listing. */
router.get('/login', userController.login);
router.get('/registro', userController.registro);

module.exports = router;
