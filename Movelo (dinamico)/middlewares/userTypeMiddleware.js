function userTypeMiddleware(req, res, next) {
    if ((req.session.userLogged && (req.session.userLogged.usuarioTipo == 'Comprador'))){
        return res.redirect('perfil')
    }
    next()
}

module.exports = userTypeMiddleware;