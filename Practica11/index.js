const express = require('express');
const app = express();
const port = 3010;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/productos', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});