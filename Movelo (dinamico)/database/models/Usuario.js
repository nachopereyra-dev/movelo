module.exports = function(sequelize, dataTypes) {
    let alias = 'Usuario';

    let cols = {
        id_user: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        date: {
            type: dataTypes.DATE
        },
        gender: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        id_user_category: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'Users',
        tablestamps: false
    }
    
    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Servicio, {
            as: 'servicios',
            foreignKey: 'id_user'
        })

        Usuario.hasMany(models.Orden, {
            as: 'ordenes',
            foreignKey: 'id_order'
        })

        Usuario.belongsTo(models.Categoria_usuario, {
            as: 'categoriaU',
            foreignKey: 'id_user_category'
        })
    }

    return Usuario;
}