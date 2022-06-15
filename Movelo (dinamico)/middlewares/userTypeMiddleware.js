function userTypeMiddleware(req, res, next) {

    if(!req.session.userLogged) {
        return res.redirect('login')
    } else if
    (req.session.userLogged.id_user_category == 3) {
        return res.redirect('perfil')
        }
        next()
    }

module.exports = userTypeMiddleware;

