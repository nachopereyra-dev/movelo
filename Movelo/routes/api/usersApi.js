var express = require('express');
var router = express.Router();
var multer = require('multer');
const path = require('path');
var { body } = require('express-validator');
// var guestMiddleware = require('../../middlewares/guestMiddleware');
// var authMiddleware = require('../../middlewares/authMiddleware');
// var adminMiddleware = require('../../middlewares/adminMiddleware')
// var userTypeMiddleware = require('../../middlewares/userTypeMiddleware')



const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, path.join(__dirname, '../public/images/avatars')); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
  }
});

const userController = require('../../controllers/api/usersApiController');
const { admin } = require('../../controllers/api/usersApiController');
const fileUpload = multer({ storage: storage });

const validacion = [
   body('first_name').notEmpty().withMessage('Debes ingresar tu nombre'),
   body('last_name').notEmpty().withMessage('Debes ingresar tu apellido'),
   body('email')
   .notEmpty().withMessage('Debes ingresar un correo electrónico').bail()
   .isEmail().withMessage('Debes ingresar un correo electrónico valido'),
   body('password').isLength({min: 8}).withMessage('Debes ingresar una contraseña de al menos 8 caracteres'),
   body('date').notEmpty().withMessage('Debes ingresar tu fecha de nacimiento'),
   body('usuarioTipo').notEmpty().withMessage('Debes elegir un tipo de usuario'),
]

/* GET users listing. */

router.get('/', userController.usersList)
router.get('/:id', userController.perfil);



module.exports = router;
