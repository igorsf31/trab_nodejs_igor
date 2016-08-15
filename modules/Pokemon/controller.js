'use strict'
const Model = require('./model');

const Controller = {
	create: function(data, callback) {
		Model.create(data, callback)
	},
	find: function(query, callback) {
		Model.find(query, callback)
	},
	findOne: function(query, callback) {
		Model.findOne(query, callback)
	},
	remove: (query, callback) => {
		Model.remove(query, callback)
	},
	update: function(query, mod, options) {
		options = options || {};
		Model.update(query, mod, options)
	}
};
module.exports = Controller;