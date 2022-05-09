var express = require('express');
var router = express.Router();
var multer = require('multer');
var { body } = require('express-validator');



const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatars'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })
const userController = require('../controllers/usersController');
const uploadFile = multer({ storage });

const validacion = [
   body('name').notEmpty().withMessage('Debes ingresar tu nombre completo'),
   body('email')
   .notEmpty().withMessage('Debes ingresar un correo electrónico').bail()
   .isEmail().withMessage('Debes ingresar un correo electrónico valido'),
   body('password').isLength({min: 8}).withMessage('Debes ingresar una contraseña de al menos 8 caracteres'),
   body('repeatPassword').isLength({min: 8}).withMessage('La contraseña debe coincidir'),
   body('fecha').notEmpty().withMessage('Debes ingresar tu fecha de nacimiento')
]

/* GET users listing. */
router.get('/login', userController.login);
router.get('/registro', userController.registro);
router.get('/admin/crear', userController.adminCrear);
router.get('/admin/elegir-editar', userController.adminEditar);

router.post('/registro', uploadFile.single('avatar'), validacion, userController.crearUsuario);

module.exports = router;
