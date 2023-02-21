/** @format */

const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
	console.log('CONNECTED TO MONGODB ATLAS');
});

app.listen(PORT, () => {
	console.log('Server Started at PORT ', PORT);
});
