const express = require('express');
const app = express();
const port = 3000;

// app.use((req, res) => {
//   console.log('We got something');

// });

app.get('/', (req, res) => {
	res.send('<h1>Hey homey!</h1>');
});

app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
	const { subreddit, postId } = req.params;
	res.send(
		`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit!</h1>`
	);
});

app.get('/cats', (req, res) => {
	res.send('<h1>Meowww!</h1>');
});

app.get('/search', (req, res) => {
	const { q } = req.query;
	if (!q) res.send('<h3>nothing found if nothing search!</h3>');
	res.send(`<h2>Search result for ${q}</h2>`);
});

app.get('*', (req, res) => {
	//get anything, should be the last
	res.send("I don't know that path");
});

app.listen(port, () => console.log(`Listening on port: ${port}!`));
