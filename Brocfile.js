'use strict';
module.exports = function (broccoli) {
    var tree = broccoli.makeTree('fixture');
    var context = { locals : { what : "World"} };
    var options = { context : context };
	return require('./index')(tree, options);
};