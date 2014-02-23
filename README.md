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

Currently the support for extend/include is limited, Because of [broccoli-filter #1 issue](https://github.com/joliss/broccoli-filter/pull/1). If you want support in extend/include, You can specify "filename" which swig will use to get relative paths :

    var swigOptions = { context : { locals : { what : "World"}, filename : "src/file_that_doesnt_exists.swig" } };


    
