'use strict';

var app = require('../..');
import request from 'supertest';

var newVote;

describe('Vote API:', function() {

  describe('GET /api/votes', function() {
    var votes;

    beforeEach(function(done) {
      request(app)
        .get('/api/votes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          votes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      votes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/votes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/votes')
        .send({
          name: 'New Vote',
          info: 'This is the brand new vote!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newVote = res.body;
          done();
        });
    });

    it('should respond with the newly created vote', function() {
      newVote.name.should.equal('New Vote');
      newVote.info.should.equal('This is the brand new vote!!!');
    });

  });

  describe('GET /api/votes/:id', function() {
    var vote;

    beforeEach(function(done) {
      request(app)
        .get('/api/votes/' + newVote._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          vote = res.body;
          done();
        });
    });

    afterEach(function() {
      vote = {};
    });

    it('should respond with the requested vote', function() {
      vote.name.should.equal('New Vote');
      vote.info.should.equal('This is the brand new vote!!!');
    });

  });

  describe('PUT /api/votes/:id', function() {
    var updatedVote;

    beforeEach(function(done) {
      request(app)
        .put('/api/votes/' + newVote._id)
        .send({
          name: 'Updated Vote',
          info: 'This is the updated vote!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedVote = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedVote = {};
    });

    it('should respond with the updated vote', function() {
      updatedVote.name.should.equal('Updated Vote');
      updatedVote.info.should.equal('This is the updated vote!!!');
    });

  });

  describe('DELETE /api/votes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/votes/' + newVote._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when vote does not exist', function(done) {
      request(app)
        .delete('/api/votes/' + newVote._id)
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
