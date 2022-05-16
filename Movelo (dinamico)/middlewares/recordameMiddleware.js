function recordameMiddleware(req, res, next) {
    next();

    if (req.cookies.recordarme != undefined && 
    req.session.usuarioLogueado == undefined) {
        const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
        const listadoDeUsuarios = fs.readFileSync(usuariosFilePath, 'utf-8');
        let usuarios;
        if (listadoDeUsuarios == '') {
            usuarios = [];
        } else {
            usuarios = JSON.parse(listadoDeUsuarios);
        }
        let usuarioALoguearse

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email == req.cookies.recordarme) {
                    usuarioALoguearse = usuarios[i];
                    break;
                }
            }

            req.session.usuarioLogueado = usuarioALoguearse;
        }
        next();
        }

        module.exports = recordameMiddleware;
