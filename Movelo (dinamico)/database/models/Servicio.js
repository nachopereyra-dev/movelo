module.exports = function(sequelize, dataTypes) {
    let alias = 'Servicio';

    let cols = {
        id_service: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        verified: {
            type: dataTypes.BIT
        },
        id_user: {
            type: dataTypes.INTEGER
        },
        origen: {
            type: dataTypes.STRING
        },
        destination: {
            type: dataTypes.STRING
        },
        id_shipment_category: {
            type: dataTypes.INTEGER
        },
        weight: {
            type: dataTypes.INTEGER
        },
        height: {
            type: dataTypes.INTEGER
        },
        width: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.LARGETEXT
        },
        price: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'Services',
        tablestamps: false
    }

    let Servicio = sequelize.define(alias, cols, config);

    Servicio.associate = function(models) {
        Servicio.belongsTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'id_user'
        })

        Servicio.hasMany(models.Orden, {
            as: 'ordenes',
            foreignKey: 'id_service'
        })

        Servicio.belongsTo(models.Categoria_envio, {
            as: 'categoriaE',
            foreignKey: 'id_shipment_category'
        })
    }

    return Servicio;
}