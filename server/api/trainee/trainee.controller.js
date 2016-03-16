/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/trainees              ->  index
 * POST    /api/trainees              ->  create
 * GET     /api/trainees/:id          ->  show
 * PUT     /api/trainees/:id          ->  update
 * DELETE  /api/trainees/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var sqldb = require('../../sqldb');
var Trainee = sqldb.Trainee;

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
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
          return entity;
        });
    }
    return null;
  };
}

// Gets a list of Trainees
export function index(req, res) {
  Trainee.findAll()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Trainee from the DB
export function show(req, res) {
  Trainee.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Trainee in the DB
export function create(req, res) {
  Trainee.create(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Trainee in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Trainee.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Trainee from the DB
export function destroy(req, res) {
  Trainee.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
