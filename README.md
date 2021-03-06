[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-inject-head.svg)](http://emberobserver.com/addons/ember-cli-inject-head)
[![Build Status](https://travis-ci.org/devotox/ember-cli-inject-head.svg)](http://travis-ci.org/devotox/ember-cli-inject-head)
[![Coverage Status](https://codecov.io/gh/devotox/ember-cli-inject-head/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-cli-inject-head)
[![NPM Version](https://badge.fury.io/js/ember-cli-inject-head.svg)](http://badge.fury.io/js/ember-cli-inject-head)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-inject-head.svg)](https://www.npmjs.org/package/ember-cli-inject-head)
[![Dependency Status](https://david-dm.org/devotox/ember-cli-inject-head.svg)](https://david-dm.org/devotox/ember-cli-inject-head)
[![DevDependency Status](https://david-dm.org/devotox/ember-cli-inject-head/dev-status.svg)](https://david-dm.org/devotox/ember-cli-inject-head#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-cli-inject-head.svg)](https://greenkeeper.io/)

ember-cli-inject-head
==============================================================================

A way to inject all meta tags and extra scripts into head tags that can be preprocessed with handlebars

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-inject-head
```

Usage
------------------------------------------------------------------------------

### Options
	"inject-head": {
		"template": "app/templates/head.hbs",
		"context": {
			"title": "Example Title",
			"description": "Example Description"
		}
	}

### Sample Template
    <meta charset="utf-8">
    <title name="title">{{title}}</title>
    <meta name="description" content="{{description}}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
