const listadoDeProductos = [
    {
        id: 1,
        verificado: true,
        mensajero: 'Juan Perez',
        origen: 'Buenos Aires',
        destino: 'Mar del Plata',
        categoria: 'categoria',
        distancia: 20,//km
        peso: 2,//kg
        precio: '14,99',//u$s
        imagen: 'BA-MDQ.png',
    },
    {
        id: 2,
        verificado: true,
        mensajero: 'Daniel Klein',
        origen: 'Palermo',
        destino: 'Lanus',
        categoria: 'categoria',
        distancia: 20,//km
        peso: 2,//kg
        precio: '4,60',//u$s
        imagen: 'BA-MDQ.png',
    },
    {
        id: 3,
        verificado: false,
        mensajero: 'Carlos Manson',
        origen: 'Buenos Aires',
        destino: 'Punta del Este',
        categoria: 'categoria',
        distancia: 20,//km
        peso: 2,//kg
        precio: '22,49',//u$s
        imagen: 'BA-MDQ.png',
    },
    {
        id: 4,
        verificado: true,
        mensajero: 'Julián Suárez',
        origen: 'Montevideo',
        destino: 'Buenos Aires',
        categoria: 'categoria',
        distancia: 20,//km
        peso: 2,//kg
        precio: '16,20',//u$s
        imagen: 'BA-MDQ.png',
    },
    {
        id: 5,
        verificado: false,
        mensajero: 'Camila Saraceno',
        origen: 'Belgrano',
        destino: 'La Plata',
        categoria: 'categoria',
        distancia: 20,//km
        peso: 2,//kg
        precio: '7,99',//u$s
        imagen: 'BA-MDQ.png',
    },
    {
        id: 6,
        verificado: true,
        mensajero: 'Joel Cohen',
        origen: 'Rosario',
        destino: 'Mar del Plata',
        categoria: 'categoria',
        distancia: 20,//km
        peso: 2,//kg
        precio: '20,99',//u$s
        imagen: 'BA-MDQ.png',
    }
]


const productsController = {
    servicios: (req, res) => {
        res.render("products/servicios", { articulos: listadoDeProductos });
    },
    carrito: (req, res) => {
        res.render("products/carrito", { articulos: listadoDeProductos });
    },
    detalle: (req, res) => {
        let id = req.params.id;
        let artitucloId = listadoDeProductos.find(articulo => id == articulo.id);
        res.render("products/detalle", { articulo: artitucloId });
    }
}

module.exports = productsController;