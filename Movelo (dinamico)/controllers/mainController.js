





const mainController = {
    inicio: (req, res) => {
      res.render("inicio", {
        user: req.session.userLogged
    });
    }
    
}



module.exports = mainController;