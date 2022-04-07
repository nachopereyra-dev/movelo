


const userController = {
    login: (req, res) => {
        res.render("users/login", { title: 'Express' })
    },
    registro: (req, res) => {
        res.render("users/registro", { title: 'Express' })
    },
    admin: (req, res) => {
        res.render("users/admin", { title: 'Express' })
    }
    
}

module.exports = userController;