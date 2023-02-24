const express = require('express');

const app = express()
const PORT = 4554;

app.get('/', async(req, res) => {
    console.log('incomming request');
    res.send('home');
});

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});