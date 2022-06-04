function userTypeMiddleware(req, res, next) {

    if(!req.session.userLogged) {
        return res.redirect('login')
    } else if
    (req.session.userLogged.usuarioTipo == 'Comprador') {
        return res.redirect('perfil')
        }
        next()
    }

module.exports = userTypeMiddleware;

