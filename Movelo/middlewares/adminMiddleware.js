function adminMiddleware(req, res, next) {
    if (!(req.session.userLogged && (req.session.userLogged.id_user_category == 1))){
        return res.redirect('perfil')
    }
    next()
}

module.exports = adminMiddleware;