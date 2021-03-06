# get-gulp-inst

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/get-gulp-inst.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/get-gulp-inst?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/get-gulp-inst.png)](https://travis-ci.org/LingyuCoder/get-gulp-inst)
[![Dependency Status](https://david-dm.org/LingyuCoder/get-gulp-inst.svg)](https://david-dm.org/LingyuCoder/get-gulp-inst)
[![devDependency Status](https://david-dm.org/LingyuCoder/get-gulp-inst/dev-status.svg)](https://david-dm.org/LingyuCoder/get-gulp-inst#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/get-gulp-inst.svg?style=flat-square)](http://npmjs.org/package/get-gulp-inst)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/get-gulp-inst.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/get-gulp-inst.svg?style=flat-square)](https://npmjs.org/package/get-gulp-inst)

Get gulp instance from gulpfile with Promise api

## Installation

```bash
$ npm install --save get-gulp-inst
```

## Usage

```javascript
const getGulpInst = require('get-gulp-inst');
getGulpInst(path.join(process.cwd(), 'gulpfile.js'))
  .then(inst => {
    // do something
  })
  .catch(e => {
    // error handling here
  });
```

## License

The MIT License (MIT)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
