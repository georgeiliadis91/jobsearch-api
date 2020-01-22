const express = require('express');

const app = express();
const db = require('./config/database');

app.use(express.json());

// Database

// Test DB
db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err));

// Index route
app.get('/', async (req, res) => res.send('hello there'));

// Gig routes
app.use('/joblistings', require('./routes/joblistings'));

app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
