'use strict';
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

var files = fs.readdirSync('fixture');

for (var index in files) {
    
    var fileName = files[index];
    var fullPath = 'fixture/' + fileName;
    
    if (fs.lstatSync(fullPath).isDirectory()) {
        continue;
    }
    
    var baseName = path.basename(fileName, '.swig');
    
    it('should compile md ' + fileName, function () {
    	assert.equal(
    		fs.readFileSync('temp/' + baseName + '.html', 'utf8'),
    		fs.readFileSync('fixture/expected/' + baseName + '.html', 'utf8').trim()
    	);
    });
}
