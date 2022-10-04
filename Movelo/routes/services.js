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

router.get('/', productosController.listar)
router.post('/', productosController.search)
router.get('/:id/detalle', productosController.detalle);
router.get('/:id', productosController.perfil)

module.exports = router;
