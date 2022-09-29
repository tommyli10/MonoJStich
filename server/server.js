const express = require('express');
const app = express();
const path = require('path');

// app.use('/bundle.js', express.static(path.join(__dirname, '../dist')));
app.get('/bundle.js', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../dist/bundle.js'));
});

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

// This next get method is super important, must keep it for React Router to work
app.get('/*', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3000, () => { console.log('Inside port 3000') })