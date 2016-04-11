'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var voteCtrlStub = {
  index: 'voteCtrl.index',
  show: 'voteCtrl.show',
  create: 'voteCtrl.create',
  update: 'voteCtrl.update',
  destroy: 'voteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var voteIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './vote.controller': voteCtrlStub
});

describe('Vote API Router:', function() {

  it('should return an express router instance', function() {
    voteIndex.should.equal(routerStub);
  });

  describe('GET /api/votes', function() {

    it('should route to vote.controller.index', function() {
      routerStub.get
        .withArgs('/', 'voteCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/votes/:id', function() {

    it('should route to vote.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'voteCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/votes', function() {

    it('should route to vote.controller.create', function() {
      routerStub.post
        .withArgs('/', 'voteCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/votes/:id', function() {

    it('should route to vote.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'voteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/votes/:id', function() {

    it('should route to vote.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'voteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/votes/:id', function() {

    it('should route to vote.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'voteCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
