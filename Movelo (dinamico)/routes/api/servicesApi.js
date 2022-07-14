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
const productosController = require('../../controllers/api/productosApiController');



/**** GETs de Servicios ****/

router.get('/', productosController.listar)
router.get('/:id',  productosController.detalle)



module.exports = router;