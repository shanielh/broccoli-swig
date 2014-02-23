'use strict';
module.exports = function (broccoli) {
    var tree = broccoli.makeTree('fixture');
    var context = { 
        locals : { what : "World"}, // The locals for template rendering
        filename : 'fixture/file.swig' // Will be used for extend/include
    };
    var options = { context : context, extendSwig : function(swig) {
        // What a lovely place to extend swig :)
    } };
	return require('./index')(tree, options);
};