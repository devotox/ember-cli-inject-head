/* jshint node: true */
'use strict';

var fs = require('fs');

var Handlebars = require('handlebars');


module.exports = {
  name: 'base-head',

  contentFor: function(type, config){   
    var options = config.options['inject-head'];

    if( type != 'head' || !options) return;

    console.log(options);
    var head = fs.readFileSync(options.template, 'utf8').toString();
    return Handlebars.compile(head)(options.context);
  }
};
