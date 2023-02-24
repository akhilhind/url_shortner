const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4554;
app.use(cors())

app.get('/', async(req, res) => {
    console.log('incomming request');
    res.send('home');
});

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});