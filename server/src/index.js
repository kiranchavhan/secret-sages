require('dotenv').config();
const express = require('express');
const mongoose = require('./config');
const { EmpRoute } = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
// Handling cors
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'OPTIONS, GET, POST, PUT, PATCH, DELETE',
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.use(express.json());
app.use('/api', EmpRoute);

app.get('/', (req, res) => {
	res.send('Welcome to Xethon 2021 Server');
});

// Startig server
mongoose
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.info(`Running at http://localhost:${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.warn(err);
	});
