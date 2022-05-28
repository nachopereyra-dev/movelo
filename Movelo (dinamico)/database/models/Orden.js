module.exports = function(sequelize, dataTypes) {
    let alias = 'Ordenes';

    let cols = {
        id_order: {
            type: dataTypes.INTEGER
        },
        id_user: {
            type: dataTypes.INTEGER
        },
        id_service: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'Orders',
        tablestamps: false
    }

    let Ordenes = sequelize.define(alias, cols, config);

    Ordenes.associate = function(models) {
        Ordenes.belongsTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'id_user'
    })

        Ordenes.belongsTo(models.Servicio, {
            as: 'servicios',
            foreignKey: 'id_service'
    })
    }

    return Ordenes;
}