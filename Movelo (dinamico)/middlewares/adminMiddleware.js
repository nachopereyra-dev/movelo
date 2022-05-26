function adminMiddleware(req, res, next) {
    if (!(req.session.userLogged && (req.session.userLogged.usuarioTipo == 'Admin'))){
        return res.redirect('perfil')
    }
    next()
}

module.exports = adminMiddleware;