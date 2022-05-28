module.exports = function(sequelize, dataTypes) {
    let alias = 'CategoriaU';

    let cols = {
        id_user_categroy: {
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: 'Userstypes',
        tablestamps: false
    }

    let Categoria_usuario = sequelize.define(alias, cols, config);

    Categoria_usuario.associate = function(models) {
        Categoria_usuario.hasMany(models.Usuarios, {
            as: 'usuarios',
            foreignKey: 'id_user_category'
        })
    }

    return Categoria_usuario;
}