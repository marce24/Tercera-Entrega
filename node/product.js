const { DataTypes, Model } = require('sequelize');
const sequelize = require('./infra/db');

class Product extends Model {}

Product.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DECIMAL
  },
  stock: {
    type: DataTypes.INTEGER
  },
  category: {
    type: DataTypes.STRING
  },
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  img: {
    type: DataTypes.BLOB
  },
  createdAt: {
    type: DataTypes.TIME,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.TIME,
    allowNull: true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Product', // We need to choose the model name
  tableName: 'products',
  timestamps: true
});



module.exports = Product