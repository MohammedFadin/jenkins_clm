const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('Jenkins CLM')
});

app.listen(2000);