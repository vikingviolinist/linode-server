const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Lorem ipsum');
})

app.listen(port, () => console.log(`Server is up and runnig on port ${port}`))


