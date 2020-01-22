const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const Sequelize = require('sequelize');

// Get Job list
router.get('/', (req, res) =>
	Job.findAll()
		.then(jobs => res.send(JSON.stringify(jobs)))
		.catch(err => console.log(err))
);

module.exports = router;
