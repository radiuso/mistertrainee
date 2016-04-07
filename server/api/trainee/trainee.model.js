'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Trainee', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    year: DataTypes.INTEGER, // year of the work placement
    vote: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  });
}
