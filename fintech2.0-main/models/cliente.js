'use strict';
const {
  Model
} = require('sequelize');
const venda = require('./venda');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.hasMany(Venda, {
        foreignKey: 'ClienteId' 
      });
      Venda.belongsTo(Cliente);
    }
  }
  Cliente.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};