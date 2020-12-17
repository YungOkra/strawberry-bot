const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('assets'));
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/../assets/index.html'));
});

module.exports = app;