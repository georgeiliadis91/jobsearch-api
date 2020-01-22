const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Sequelize = require('sequelize');

// Get Job list
router.get('/', (req, res) =>
	User.findAll()
		.then(users => res.send(JSON.stringify(users)))
		.catch(err => console.log(err))
);

module.exports = router;
