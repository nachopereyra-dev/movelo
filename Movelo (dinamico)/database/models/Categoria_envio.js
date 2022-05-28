module.exports = function(sequelize, dataTypes) {
    let alias = 'CategoriaE';

    let cols = {
        id_shipment_categroy: {
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: 'Shipmentstypes',
        tablestamps: false
    }

    let Categoria_envio = sequelize.define(alias, cols, config);

    Categoria_envio.associate = function(models) {
        Categoria_envio.hasMany(models.Servicio, {
            as: 'servicios',
            foreignKey: 'id_shipment_category'
        })
    }

    return Categoria_envio;
}