/** @format */

const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const booksRoute = require('./routes/books');

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/books', booksRoute);

// connect to mongodb atlas
mongoose
	.connect(process.env.MONGO_URL, { useNewUrlParser: true })
	.then(() => {
		console.log('CONNECTED TO MONGODB ATLAS');
	})
	.catch((error) => {
		console.log('something wrong happened');
	});

//start the server
app.listen(PORT, () => {
	console.log('Server Started at PORT ', PORT);
});
