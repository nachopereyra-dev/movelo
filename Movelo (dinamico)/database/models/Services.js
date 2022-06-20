module.exports = function(sequelize, dataTypes) {
    let alias = 'Services';

    let cols = {
        id_service: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        id_frequency: {
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
            type: dataTypes.TEXT
        },
        price: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'Services',
        timestamps: false
    }

    let Services = sequelize.define(alias, cols, config);

    Services.associate = function(models) {
        Services.belongsTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'id_user'
        })

        Services.hasMany(models.Orden, {
            as: 'ordenes',
            foreignKey: 'id_service'
        })

        Services.belongsTo(models.CategoriaEnvio, {
            as: 'categoriaE',
            foreignKey: 'id_shipment_category'
        })

        Services.belongsTo(models.FrecuenciaEnvio, {
            as: 'frecuenciaE',
            foreignKey: 'id_frequency'
        })
    }

    return Services;
}