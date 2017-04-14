const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello home page</h1>');
});
app.get('/login', (req, res) => {
    res.send('<h2>Please Login</h2>');
});
app.listen(3000, () => {
    console.log('Connected 3000 port!');
});