const express = require('express');

let app = express();

app.get('/', (req, res) => {
	//res.status(200).send('Hello World!');
	res.status(404).send({
		error: 'Page not found.',
		name: 'Todo App v1.0'
	});
});

app.get('/users', (req, res) => {
	let users = [
		{ age : 10 , name : 'Bob'},
		{ age : 20 , name : 'Bill'}
	]
	res.status(200).send(users);
});


app.listen(3000);

module.exports.app = app;