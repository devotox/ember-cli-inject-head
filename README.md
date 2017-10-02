# ember-cli-inject-head

[![Greenkeeper badge](https://badges.greenkeeper.io/devotox/ember-cli-inject-head.svg)](https://greenkeeper.io/)

A way to inject all meta tags and extra scripts into head tags that can be preprocessed with handlebars


## Options
	"inject-head": {
		"template": "app/templates/head.hbs",
		"context": { 
			"title": "Example Title", 
			"description": "Example Description"
		}
	}

## Sample Template
    <meta charset="utf-8">
    <title name="title">{{title}}</title>
    <meta name="description" content="{{description}}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">