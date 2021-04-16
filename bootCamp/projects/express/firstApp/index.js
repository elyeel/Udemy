const express = require('express');
const app = express();
const port = 3000;

// app.use((req, res) => {
//   console.log('We got something');

// });

app.get('/cats', (req, res) => {
	res.send('<h1>Meowww!</h1>');
});

app.get('*', (req, res) => {
	//get anything, should be the last
	res.send("I don't know that path");
});

app.listen(port, () => console.log(`Listening on port: ${port}!`));
