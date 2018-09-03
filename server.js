const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/home', (req, res) => res.send('Home also working'));

app.listen(8081, () => console.log('Example app listening on port 8081!'));
