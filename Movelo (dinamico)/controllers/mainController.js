





const mainController = {
    inicio: (req, res) => {
      res.render("inicio", { title: 'Express' });
    },
    servicios: (req, res) => {
        res.render("products/servicios", { title: 'Express' })
    },
    shop: (req, res) => {
        res.render("products/shop", { title: 'Express' })
    },
    login: (req, res) => {
        res.render("./users/login", { title: 'Express' })
    },
    registro: (req, res) => {
        res.render("users/registro", { title: 'Express' })
    }
}



module.exports = mainController;