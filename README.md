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
        var swigOptions = { context : { locals : { what : "World"} }};
    	tree = require('broccoli-swig')(tree, swigOptions);
        
        return tree;
    };
    
Currently there is no support for layout because of swig-filter #1 issue.

    
