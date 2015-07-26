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

  preBuild: function() {
	var config = this.app.options;
	var options = config['inject-head'];

	if( options && options.template ) {
	  try {
		var head = fs.readFileSync(options.template, 'utf8').toString();
		return inject = Handlebars.compile(head)(options.context);
	  } catch (err) {
		console.error('!!!!!!!! EMBER CLI INJECT HEAD - ERROR !!!!!!!\n', err);
		return inject = false;
	  }
	}
  }
};
