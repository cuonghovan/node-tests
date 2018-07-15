const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.get('/users', (req, res) => {
    res.status(200).send([{   
        name: 'anna',
        age: 24
    },
    {
        name: 'bob',
        age: 28
    }]);
});

app.listen(3000);

module.exports.app = app;
