/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Vote = db.sequelize.import('../api/vote/vote.model');
db.Trainee = db.sequelize.import('../api/trainee/trainee.model');
db.User = db.sequelize.import('../api/user/user.model');

export default db;
