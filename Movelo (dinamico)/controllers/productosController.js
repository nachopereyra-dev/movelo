const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
const listadoDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productosController = {
    servicios: (req, res) => {
        res.render("productos/servicios", { articulos: listadoDeProductos });
    },
    carrito: (req, res) => {
        res.render("productos/carrito", { articulos: listadoDeProductos });
    },
    detalle: (req, res) => {
        let id = req.params.id;
        let artitucloId = listadoDeProductos.find(articulo => id == articulo.id);
        res.render("productos/detalle", { articulo: artitucloId });
    },
    adminCrearPOST: (req, res) => {
        let nuevoServicio = {
			id: listadoDeProductos.length + 1,
            verificado: req.body.verificado,
            mensajero: "Admin",
			origen: req.body.origen,
			destino: req.body.destino,
  			categoria: req.body.categoria,
            distancia: "???",
            peso: req.body.peso,
            precio: req.body.precio,
            imagen: req.body.imagen,
            descripcion: req.body.descripcion,
		};
		listadoDeProductos.push(nuevoServicio);
		fs.writeFileSync(productsFilePath,JSON.stringify(listadoDeProductos, null , ' '));
        res.render("productos/servicios", { articulos: listadoDeProductos });
    },
}

module.exports = productosController;