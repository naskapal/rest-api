'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    access: DataTypes.INTEGER
  });
  
  User.beforeCreate((user, option) => {
    const saltRounds = 10;
    const myPlaintextPassword = user.password;
    return  bcrypt.hash(myPlaintextPassword, saltRounds).then(hash => {
      user.password = hash
    });
  });
  
  return User;
};