const { Router } = require('express');
const express = require('express');
const router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/products'); 
    }, 
    filename: function (req, file, cb) { 
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});
const uploadFile = multer({ storage });
const productosController = require('../controllers/productosController');


/**** GETs de Productos ****/
router.get('/', productosController.servicios);

router.get('/carrito', productosController.carrito);
router.get('/:id/detalle', productosController.detalle);

/**** Formulario y Edición de Productos  ****/
router.get('/:id/editar', productosController.edit)
router.put('/:id', productosController.update); 

/**** Creación de Productos ****/
router.post('/', productosController.adminCrearPOST);



/**** Borrado de Productos ****/
router.delete('/:id', productosController.destroy);



module.exports = router;
