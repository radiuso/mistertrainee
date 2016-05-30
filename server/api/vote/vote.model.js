'use strict';

export default function(sequelize, DataTypes) {
  var Vote = sequelize.define('Vote', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    increment: DataTypes.INTEGER,
    date: DataTypes.DATEONLY
  });

  Vote.belongsTo(sequelize.import('../user/user.model'), {as: 'user'});
  Vote.belongsTo(sequelize.import('../trainee/trainee.model'), {as: 'trainee'});

  return Vote;
}
