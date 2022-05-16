var express = require('express');
var router = express.Router();
var multer = require('multer');
const path = require('path');
var { body } = require('express-validator');
var guestMiddleware = require('../middlewares/guestMiddleware');
var authMiddleware = require('../middlewares/authMiddleware');



const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, path.join(__dirname, '../public/images/avatars')); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
  }
});

const userController = require('../controllers/usersController');
const fileUpload = multer({ storage: storage });

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
router.get('/registro', guestMiddleware, userController.registro);
router.get('/login', guestMiddleware, userController.login);
router.get('/perfil', authMiddleware, userController.perfil);
router.get('/logout', userController.logout);

router.get('/admin/crear', authMiddleware, userController.adminCrear);
router.get('/admin/elegir-editar', authMiddleware, userController.adminEditar);

router.post('/registro', fileUpload.single('avatar'), validacion, userController.procesoRegistro);
router.post('/login', [
   body('email').isEmail().withMessage('Debes ingresar un correo electrónico valido'),
   body('password').isLength({min: 8}).withMessage('Debes ingresar una contraseña de al menos 8 caracteres')
], userController.procesoLogin)

router.get('/check', function(req, res) {
   if (req.session.userlogged == undefined) {
      res.send('No estas logueado')
   } else {
      res.send('El usuario logueado es ' + req.session.userLogged.email);
   }
})
module.exports = router;
