'use strict';
module.exports = function (broccoli) {
    var tree = broccoli.makeTree('fixture');
    var context = { 
        locals : { what : "World"}, // The locals for template rendering
    };
    var options = { context : context, extendSwig : function(swig) {
        // What a lovely place to extend swig :)
    } };
	return require('./index')(tree, options);
};