/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/votes              ->  index
 * POST    /api/votes              ->  create
 * GET     /api/votes/:id          ->  show
 * PUT     /api/votes/:id          ->  update
 * DELETE  /api/votes/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import {Vote, Trainee} from '../../sqldb';


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function handleCanDoAction(res) {
  return function(entities) {
    if (_.size(entities) >= 3) {
      res.status(423).end();
      return null;
    }
    return entities;
  };
}

// Gets a list of Votes
export function index(req, res) {
  Vote.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function find(req, res) {
  var userId = req.params.id;
  var date = new Date();
  date.setHours(0,0,0,0);

  Vote.findAll({
    where: {
      userId: userId,
      date: date
    }
  })
  .then(respondWithResult(res))
  .catch(handleError(res));
}

// Gets a single Vote from the DB
export function show(req, res) {
  Vote.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Vote in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Vote.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Vote from the DB
export function destroy(req, res) {
  Vote.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

export function create(req, res) {
  var user = req.body.user;
  var trainee = req.body.trainee;
  var date = new Date();
  date.setHours(0,0,0,0);

  var traineeId = trainee._id;
  var vote = req.body.vote;

  if(!_.isUndefined(user) && !_.isUndefined(trainee)) {
    Vote.findAll({
      where: {
        userId: user._id
      }
    })
    .then(handleCanDoAction(res))
    .then(function(entities) {
      if(entities) {
        return Vote.create({
          userId: user._id,
          traineeId: trainee._id,
          date: date,
          increment: vote
        });
      }
    })
    .then(function(vote) {
      if(vote) {
        trainee.vote = trainee.vote + vote;

        delete trainee._id;
        return Trainee.find({
          where: {
            _id: traineeId
          }
        })
        .then(handleEntityNotFound(res))
        .then(saveUpdates(trainee));
      }
    })
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
  } else {
    res.status(500).end();
  }
}
