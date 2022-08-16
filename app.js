const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Lorem ipsum');
})

app.get('/demo', (req, res) => {
	res.set('X-full-stack', 'test');
	res.status(418);
	res.send('I\'m a teapot...');
})


app.listen(port, () => console.log(`Server is up and runnig on port ${port}`))


