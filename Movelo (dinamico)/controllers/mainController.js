





const mainController = {
    inicio: (req, res) => {
      res.render("inicio", { title: 'Express' });
    },
    servicios: (req, res) => {
        res.render("products/servicios", { title: 'Express' })
    },
    carrito: (req, res) => {
        res.render("products/carrito", { title: 'Express' })
    }
}



module.exports = mainController;