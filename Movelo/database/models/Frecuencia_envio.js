module.exports = function(sequelize, dataTypes) {
    let alias = 'FrecuenciaEnvio';

    let cols = { 
        id_frequency: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: 'Frequency',
        timestamps: false
    }

    let FrecuenciaEnvio = sequelize.define(alias, cols, config);

    FrecuenciaEnvio.associate = function(models) {
        FrecuenciaEnvio.hasMany(models.Services, {
            as: 'frecuencia',
            foreignKey: 'id_frequency'
        })
    }

    return FrecuenciaEnvio;
}