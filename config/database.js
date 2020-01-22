const Sequelize = require('sequelize');

module.exports = new Sequelize('postgres', 'postgres', 'password123', {
	host: 'localhost',
	dialect: 'postgres',
	subQuery: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	define: {
		timestamps: false
	}
});
