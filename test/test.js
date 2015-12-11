'use strict';
require('should');
require('should-promised');
const getGulpInstance = require('../index');
const path = require('path');

describe('getGulpInstance', () => {
  let inst = null;
  it('should get gulp instance', () => {
    return getGulpInstance(path.join(__dirname, 'source', 'normal.js'))
      .then(i => inst = i)
      .should.finally.be.Object;
  });
  it('should use cache when same file', () => {
    return getGulpInstance(path.join(__dirname, 'source', 'normal.js'))
      .should.be.fulfilledWith(inst);
  });
  it('should reject when error', () => {
    return getGulpInstance(path.join(__dirname, 'source', 'error.js'))
      .should.be.rejectedWith(Error, {
        message: 'Parse gulpfile failed: Unexpected token :'
      });
  });
});
