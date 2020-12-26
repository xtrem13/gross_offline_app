const { Sequelize, DataTypes } = require('sequelize');
const Transport = require('./transport');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
})


const Contract = sequelize.define('Contract', {
 
  INS_DATE: {
    type: DataTypes.date,
    allowNull: false
  },
  INS_DATEF: {
    type: DataTypes.date,
    allowNull: false
  },
  INS_DAY: {
    type: DataTypes.date,
    allowNull: false
  },
  INS_DATET: {
    type: DataTypes.date,
    allowNull: false
  },
  INS_DATE: {
    type: DataTypes.date,
    allowNull: false
  },
  INS_DATE: {
    type: DataTypes.date,
    allowNull: false
  },
  OWNERID:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  BENEFNAME:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  VAL_USLOVIYA:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  VAL_USLOVIYA:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  VAL_LBL:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  VAL_KURS:{
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  INS_COUNTRY:{
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  ISTOCHNIK_O:{
    type: DataTypes.STRING,
    allowNull: false
  },
  INS_DOGNUM:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  OLD_DOGNUM:{
    type: DataTypes.STRING,
    allowNull: false
  },
  INSURANCE_PREMIYA_ID:{
    type: DataTypes.INTEGER,
    allowNull: false
  },


});

Contract.belongsTo(Transport, { foreignKey: 'CONTRACT_ID' });
Contract.sync({force: true});


module.exports=Contract;
