const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
})


const User = sequelize.define('User', {
  // Model attributes are defined here
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  local_login:{
    type:DataTypes.STRING
  },
  local_pass:{
    type:DataTypes.STRING
  }
}, {
  // Other model options go here
});

User.sync({force: true});


module.exports=User;
