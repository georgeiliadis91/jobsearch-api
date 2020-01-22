const Sequelize = require('sequelize');
const db = require('../config/database');

const Job = db.define('job_listings', {
	id: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	type: {
		type: Sequelize.STRING
	},
	url: {
		type: Sequelize.STRING
	},
	created_at: {
		type: Sequelize.DATE
	},
	company_url: {
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.STRING
	},
	title: {
		type: Sequelize.STRING
	},
	description: {
		type: Sequelize.STRING
	},
	how_to_apply: {
		type: Sequelize.STRING
	},
	company_logo: {
		type: Sequelize.STRING
	}
});

module.exports = Job;
