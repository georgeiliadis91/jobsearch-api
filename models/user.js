const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('users', {
	id: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	username: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	created_at: {
		type: Sequelize.DATE
	}
});

module.exports = User;
