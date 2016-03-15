'use strict';

var app = require('../..');
import request from 'supertest';

var newTrainee;

describe('Trainee API:', function() {

  describe('GET /api/trainees', function() {
    var trainees;

    beforeEach(function(done) {
      request(app)
        .get('/api/trainees')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          trainees = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      trainees.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/trainees', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/trainees')
        .send({
          name: 'New Trainee',
          info: 'This is the brand new trainee!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTrainee = res.body;
          done();
        });
    });

    it('should respond with the newly created trainee', function() {
      newTrainee.name.should.equal('New Trainee');
      newTrainee.info.should.equal('This is the brand new trainee!!!');
    });

  });

  describe('GET /api/trainees/:id', function() {
    var trainee;

    beforeEach(function(done) {
      request(app)
        .get('/api/trainees/' + newTrainee._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          trainee = res.body;
          done();
        });
    });

    afterEach(function() {
      trainee = {};
    });

    it('should respond with the requested trainee', function() {
      trainee.name.should.equal('New Trainee');
      trainee.info.should.equal('This is the brand new trainee!!!');
    });

  });

  describe('PUT /api/trainees/:id', function() {
    var updatedTrainee;

    beforeEach(function(done) {
      request(app)
        .put('/api/trainees/' + newTrainee._id)
        .send({
          name: 'Updated Trainee',
          info: 'This is the updated trainee!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTrainee = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTrainee = {};
    });

    it('should respond with the updated trainee', function() {
      updatedTrainee.name.should.equal('Updated Trainee');
      updatedTrainee.info.should.equal('This is the updated trainee!!!');
    });

  });

  describe('DELETE /api/trainees/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/trainees/' + newTrainee._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when trainee does not exist', function(done) {
      request(app)
        .delete('/api/trainees/' + newTrainee._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
