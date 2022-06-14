const User = require('../models/User')
const db = require('../database/models')

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    
    if (req.cookies.userEmail) {
        const emailInCookie = req.cookies.userEmail;
        const userFromCookie = await db.Usuario.findOne({ where: { email: emailInCookie } });
        if(userFromCookie) {
            req.session.userLogged = userFromCookie;
            res.locals.isLogged = true;
            res.locals.userLogged = userFromCookie
        }
    
    }

    next();
}

module.exports = userLoggedMiddleware;