/** @format */

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 5000;

// connect to mongodb atlas
mongoose
	.connect(
		'mongodb+srv://shivanshu:shivanshu@cluster0.3jx18xk.mongodb.net/?retryWrites=true&w=majority',
		{ useNewUrlParser: true }
	)
	.then(() => {
		console.log('CONNECTED TO MONGODB ATLAS');
	});

app.listen(PORT, () => {
	console.log('Server Started at PORT ', PORT);
});
