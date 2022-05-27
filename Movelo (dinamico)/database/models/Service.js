module.exports = (sequelize, DataTypes) => {

const Service = sequelize.define('Services', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    verificado: {
        type: DataTypes.BOOLEAN
    },
    mensajero: {
        type: DataTypes.STRING
    },
    origen: {
        type: DataTypes.STRING
    },
    destino: {
        type: DataTypes.STRING
    },
    distancia: {
        type: DataTypes.DECIMAL
    },
    peso: {
        type: DataTypes.DECIMAL
    },
    precio: {
        type: DataTypes.INTEGER
    },
    imagen: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.TEXT
    }
    },
    {
       tableName: 'servicios',
       timestamps: false, 
    });
    
    return Service
}
