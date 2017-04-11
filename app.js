const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello home page</h1>');
});
app.get('/login', (req, res) => {
    res.send('<h1>Please Login</h1>');
});
app.listen(3000, () => {
    console.log('Connected 3000 port!');
});


