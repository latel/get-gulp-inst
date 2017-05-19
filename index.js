'use strict';

const path = require('path');
const co = require('co');
const fs = require('fs-extra');
let cache = {};

function removeFile(source) {
  try {
    fs.unlinkSync(source);
  } catch (e) {
    // nothing
  }
}

module.exports = co.wrap(function*(source) {
  if (cache[source]) return cache[source];
  let tempFile = path.join(path.dirname(source), `gulpfile-${Date.now()}.js`);
  try {
    fs.writeFileSync(tempFile, `
      ${fs.readFileSync(source, 'utf-8')};
      module.exports = gulp;
      delete require.cache[require.resolve("gulp")];
    `, 'utf-8');
    let inst = cache[source] = require(tempFile);
    return inst;
  } catch (e) {
    let error = new Error(`Parse gulpfile failed: ${e.message}`);
    error.stack = `  at ${source}`;
    yield Promise.reject(error);
  } finally {
    removeFile(tempFile);
  }
});
