/* jshint node: true */
'use strict';

var fs = require('fs');

var Handlebars = require('handlebars');

var inject = false;

module.exports = {
  name: 'ember-cli-inject-head',

  contentFor: function(type, config){   
    if( inject && type === 'head' ) {
      return inject;
    }
  },

  serverMiddleware: function(config) {
    var options = config.options['inject-head'];

    if( options && options.template ) {
      var head = fs.readFileSync(options.template, 'utf8').toString();
      return inject = Handlebars.compile(head)(options.context); 
    }  
  }
};
