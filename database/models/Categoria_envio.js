module.exports = function(sequelize, dataTypes) {
    let alias = 'CategoriaEnvio';

    let cols = { 
        id_shipment_category: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: 'Shipments_type',
        timestamps: false
    }

    let CategoriaEnvio = sequelize.define(alias, cols, config);

    CategoriaEnvio.associate = function(models) {
        CategoriaEnvio.hasMany(models.Services, {
            as: 'servicios',
            foreignKey: 'id_shipment_category'
        })
    }

    return CategoriaEnvio;
}