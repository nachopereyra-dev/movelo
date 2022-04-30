var express = require('express');
var router = express.Router();
var multer = require('multer');



const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatars'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })
const userController = require('../controllers/usersController');
const uploadFile = multer({ storage });

/* GET users listing. */
router.get('/login', userController.login);
router.get('/registro', userController.registro);
router.get('/admin/crear', userController.adminCrear);
router.get('/admin/elegir-editar', userController.adminEditar);

router.post('/', uploadFile.single('avatar'), userController.crearUsuario);

module.exports = router;
