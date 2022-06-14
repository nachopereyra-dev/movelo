module.exports = function(sequelize, dataTypes) {
    let alias = 'CategoriaUsuario';

    let cols = {
        id_user_category: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: 'Users_type',
        timestamps: false
    }

    let CategoriaUsuario = sequelize.define(alias, cols, config);

    CategoriaUsuario.associate = function(models) {
        CategoriaUsuario.hasMany(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'id_user_category'
        })
    }

    return CategoriaUsuario;
}