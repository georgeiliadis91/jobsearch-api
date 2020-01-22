const express = require('express');
const app = express();
const db = require('./config/database');
const cors = require('cors');
const cronjob = require('./cron/cronjob');

cronjob.start();

app.use(cors());
app.use(express.json());

db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err));

// Index route
app.get('/', async (req, res) => res.send('hello there'));

app.use('/joblistings', require('./routes/joblistings'));

app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
