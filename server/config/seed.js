/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
var User = sqldb.User;
var Trainee = sqldb.Trainee;

Trainee.sync()
  .then(() => {
    return Trainee.destroy({ where: {}});
  })
  .then(() => {
    return Trainee.bulkCreate([{
      name: "Stagiaire",
      nickname: 'LE stagiaire',
      year: 2016,
      vote: 3,
      active: true
    }, {
      name: "Marc",
      nickname: 'Un stagiaire',
      year: 2016,
      vote: 4,
      active: true
    }]);
  })
  .then(() => {
    console.log('finished populating trainnees');
  });

User.sync()
  .then(() => User.destroy({ where: {} }))
  .then(() => {
    User.bulkCreate([{
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    }])
    .then(() => {
      console.log('finished populating users');
    });
  });
