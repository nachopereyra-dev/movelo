var express = require('express');
var router = express.Router();
var multer = require('multer');
const path = require('path');
var { body } = require('express-validator');
var guestMiddleware = require('../middlewares/guestMiddleware');
var authMiddleware = require('../middlewares/authMiddleware');
var adminMiddleware = require('../middlewares/adminMiddleware')
var userTypeMiddleware = require('../middlewares/userTypeMiddleware')



const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, path.join(__dirname, '../public/images/avatars')); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
  }
});

const userController = require('../controllers/usersController');
const { admin } = require('../controllers/usersController');
const fileUpload = multer({ storage: storage });

const validacion = [
   body('first_name').isLength({min:2}).withMessage('Debes ingresar tu nombre con al menos 2 caracteres'),
   body('last_name').isLength({min:2}).withMessage('Debes ingresar tu apellido con al menos 2 caracteres'),
   body('email')
   .notEmpty().withMessage('Debes ingresar un correo electrónico').bail()
   .isEmail().withMessage('Debes ingresar un correo electrónico valido'),
   body('password').isLength({min: 8}).withMessage('Debes ingresar una contraseña de al menos 8 caracteres'),
   body('date').notEmpty().withMessage('Debes ingresar tu fecha de nacimiento'),
]

/* GET users listing. */
router.get('/registro', guestMiddleware, userController.registro);
router.post('/registro', fileUpload.single('image'), validacion, userController.procesoRegistro)

router.get('/login', guestMiddleware, userController.login);
router.post('/login', [
   body('email').isEmail().withMessage('Debes ingresar un correo electrónico valido'),
   body('password').isLength({min: 8}).withMessage('Debes ingresar una contraseña de al menos 8 caracteres')
], userController.procesoLogin)
router.get('/validation/:user/:pass', userController.procesoLoginVerification)

router.get('/perfil', authMiddleware, userController.perfil);
router.get('/editar-perfil/:id', authMiddleware, userController.editarPerfil);
router.post('/editar-perfil/:id', fileUpload.single('image'), authMiddleware, userController.actualizarPerfil);

router.get('/mis-servicios', userTypeMiddleware, userController.misServicios)
router.get('/mis-servicios/:id', userTypeMiddleware, userController.detalle)

router.get('/crear-servicio', userTypeMiddleware, userController.crearServicio)
router.post('/crear-servicio', [
   body('origen').notEmpty().withMessage('Debes ingresar la ciudad de origen de tu servicio-envio'),
   body('destino').notEmpty().withMessage('Debes ingresar la ciudad de destino de tu servicio-envio'),
   body('descripcion').isLength({min:20}).withMessage('Debes ingresar una descripcion de al menos 20 caracteres')
], userController.guardarServicio)

router.get('/editar-servicio/:id', userController.editar)
router.post('/editar-servicio/:id', [
   body('origen').notEmpty().withMessage('Debes ingresar la ciudad de origen de tu servicio-envio'),
   body('destino').notEmpty().withMessage('Debes ingresar la ciudad de destino de tu servicio-envio'),
   body('descripcion').isLength({min:20}).withMessage('Debes ingresar una descripcion de al menos 20 caracteres')
], userController.actualizar)

router.post('/borrar/:id', userController.borrar)

router.get('/admin', adminMiddleware, userController.admin)
router.get('/admin/servicios', adminMiddleware, userController.servicesList)
router.get('/admin/usuarios', adminMiddleware, userController.usersList)

router.get('/logout', userController.logout);


module.exports = router;
