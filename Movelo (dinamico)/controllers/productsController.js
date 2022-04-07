const listadoDeProductos = [
    {
        id: 1,
        mensajero: 'Juan Perez',
        partida: 'Buenos Aires',
        destino: 'Mar del Plata',
        categoria: 'categoria',
        distancia: 20,//km
        peso: 2,//kg
        precio: 100,//u$s
        imagen: 'nombre-de-imagen.jpg',
    }
]


const productsController = {
    servicios: (req, res) => {
        res.render("products/servicios", { title: 'Express' })
    },
    carrito: (req, res) => {
        res.render("products/carrito", { title: 'Express' })
    }
}

module.exports = productsController;