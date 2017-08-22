'use strict';

// Load modules

var Toc = require('markdown-toc');
var Fs = require('fs');

// Declare internals

var internals = {
    filename: './README.md'
};

internals.generate = function () {

    var api = Fs.readFileSync(internals.filename, 'utf8');
    var tocOptions = {
        bullets: '-',
        slugify: function slugify(text) {

            return text.toLowerCase().replace(/\s/g, '-').replace(/[^\w-]/g, '');
        }
    };

    var output = Toc.insert(api, tocOptions);
    Fs.writeFileSync(internals.filename, output);
};

internals.generate();
