'use strict';
var Filter = require('broccoli-filter');
var extend = require('util')._extend;

function swigFilter(inputTree, options) {
    
	if (!(this instanceof swigFilter)) {
		return new swigFilter(inputTree, options);
	}
    this.swig = require('swig');
    this.swig.setDefaults({ cache: false });
    
    this.options = options || {};
    this.context = this.options.context || {};
        
    if (this.options.extendSwig) {
        this.options.extendSwig(this.swig);
    }
    
	this.inputTree = inputTree;
}

swigFilter.prototype = Object.create(Filter.prototype);
swigFilter.prototype.constructor = swigFilter;

swigFilter.prototype.extensions = ['swig'];
swigFilter.prototype.targetExtension = 'html';

swigFilter.prototype.processString = function (str, file) {
    var fileNameContext = { filename : this.inputTree.dir + '/' + file};
    var context = extend(fileNameContext, this.context);
	
    return this.swig.render(str, context);
};

module.exports = swigFilter;