module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        fecha: {
            type: DataTypes.DATE
        },
        gender: {
            type: DataTypes.STRING
        },
        usuarioTipo: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        },
        },
        {
           tableName: 'usuarios',
           timestamps: false, 
        });
        

        return User
    }
