'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var traineeCtrlStub = {
  index: 'traineeCtrl.index',
  show: 'traineeCtrl.show',
  create: 'traineeCtrl.create',
  update: 'traineeCtrl.update',
  destroy: 'traineeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var traineeIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './trainee.controller': traineeCtrlStub
});

describe('Trainee API Router:', function() {

  it('should return an express router instance', function() {
    traineeIndex.should.equal(routerStub);
  });

  describe('GET /api/trainees', function() {

    it('should route to trainee.controller.index', function() {
      routerStub.get
        .withArgs('/', 'traineeCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/trainees/:id', function() {

    it('should route to trainee.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'traineeCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/trainees', function() {

    it('should route to trainee.controller.create', function() {
      routerStub.post
        .withArgs('/', 'traineeCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/trainees/:id', function() {

    it('should route to trainee.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'traineeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/trainees/:id', function() {

    it('should route to trainee.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'traineeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/trainees/:id', function() {

    it('should route to trainee.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'traineeCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
