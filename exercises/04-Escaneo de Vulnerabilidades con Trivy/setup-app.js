// setup-app.js

const express = require('express');
const app = express();
const port = 3000;

// Endpoint simple
app.get('/', (req, res) => {
    res.send('Hello from a potentially vulnerable app 👀');
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
