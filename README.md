broccoli-swig
=============

Swig filter for broccoli.

## Usage

First, Install :

    npm install --save-dev broccoli-swig
    
And then, Use :

    module.exports = function (broccoli) {
        var tree = broccoli.makeTree('some_path');
        
        // This is where the magic happens
        var swigOptions = { context : { locals : { what : "World"} }, extendSwig : function(swig) {
            // Lovely place to extend swig.
        }};
    	tree = require('broccoli-swig')(tree, swigOptions);
        
        return tree;
    };
    
Currently there is no support for layout because of [broccoli-filter #1 issue](https://github.com/joliss/broccoli-filter/pull/1).

    
