const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
})


const Contract = sequelize.define('Contract', {
  // Model attributes are defined here
  product_code: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dummy: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

Contract.sync();


module.exports=Contract;
