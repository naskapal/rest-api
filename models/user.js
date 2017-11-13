'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    access: {
      type : DataTypes.INTEGER,
      defaultValue: '2'
    }
  });
  
  User.beforeCreate((user, option) => {
    const saltRounds = 10;
    const myPlaintextPassword = user.password;
    return  bcrypt.hash(myPlaintextPassword, saltRounds).then(hash => {
      user.password = hash
    });
  });
  
  User.beforeUpdate((user, option) => {
    const saltRounds = 10;
    const myPlaintextPassword = user.password;
    return  bcrypt.hash(myPlaintextPassword, saltRounds).then(hash => {
      user.password = hash
    });
  })
  
  return User;
};