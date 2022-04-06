





const mainController = {
    index: (req, res) => {
      res.render("inicio", { title: 'Express' });
    },
    servicios: (req, res, next) => {
        res.render("servicios", { title: 'Express' })
    },
    shop: (req, res, next) => {
        res.render("shop", { title: 'Express' })
    },
    login: (req, res, next) => {
        res.render("login", { title: 'Express' })
    },
    registro: (req, res, next) => {
        res.render("registro", { title: 'Express' })
    }
}



module.exports = mainController;