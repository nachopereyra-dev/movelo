module.exports = (sequelize, DataTypes) => {

    const Usuario_tipo = sequelize.define('Usuario_tipo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        }
        },
        {
           tableName: 'usuariosTipo',
           timestamps: false, 
        });
        
        return Usuario_tipo
    }