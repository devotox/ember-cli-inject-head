/* jshint node: true */
'use strict';

var inject = false;

var fs = require('fs');

var Handlebars = require('handlebars');

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
	  try {
		var head = fs.readFileSync(options.template, 'utf8').toString();
	  } catch (err) {
		return inject = false;
	  }
	  return inject = Handlebars.compile(head)(options.context);
	}
  }
};
