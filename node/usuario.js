const { DataTypes, Model } = require('sequelize');
const sequelize = require('./infra/db');

class Usuario extends Model { }

Usuario.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Debe ingresar un correo válido."
      }
    }
  },
  password: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.TIME,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.TIME,
    allowNull: true
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: 'user'
  }
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'usuarios',
  timestamps: true
});



module.exports = Usuario