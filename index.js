'use strict';
var Filter = require('broccoli-filter');

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

swigFilter.prototype.processString = function (str) {
	return this.swig.render(str, this.context);
};

module.exports = swigFilter;