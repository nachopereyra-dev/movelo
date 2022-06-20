const db = require('../database/models')

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    const emailInCookie = req.cookies.userEmail;
    const userFromCookie = await db.Usuario.findOne({ where: { email: emailInCookie || null } });

    if(userFromCookie) {
        req.session.userLogged = userFromCookie
    }

    if(req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware;

