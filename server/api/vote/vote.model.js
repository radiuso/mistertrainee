'use strict';
// import sqldb from '../../sqldb';
// var User = sqldb.User;
// var Trainee = sqldb.Trainee;

export default function(sequelize, DataTypes) {
  var Vote = sequelize.define('Vote', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    increment: DataTypes.INTEGER
  });

  //Vote.hasOne(User);
  //Vote.hasOne(Trainee);

  return Vote;
}
