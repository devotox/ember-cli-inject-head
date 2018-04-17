/* eslint-env node */
'use strict';

let inject = false;

const fs = require('fs');

const Handlebars = require('handlebars');

module.exports = {
  name: 'ember-cli-inject-head',

  contentFor: function(type){
    return type === 'head' && inject;
  },

  preBuild: function() {
    let config = this.app && this.app.options ? this.app.options : {};
    let options = config && config['inject-head'];

    if(options && options.template ) {
      try {
        let head = fs.readFileSync(options.template, 'utf8').toString();
        return inject = Handlebars.compile(head)(options.context);
      } catch (err) {
        console.error('!!!!!!!! EMBER CLI INJECT HEAD - ERROR !!!!!!!\n', err); // eslint-disable-line
        return inject = false;
      }
    }
  }
};
