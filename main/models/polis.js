const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
})


const Polis = sequelize.define('Polis', {
 
});

Polis.sync({force: true});


module.exports=Polis;
