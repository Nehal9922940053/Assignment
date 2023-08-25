const express = require('express');

const app = express();

app.set('view engine','ejs');

// app.set('views','myviews')

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<h1>This is Home Page</h1>')
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<h1>This is About Page</h1>')
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/AboutUs', (req, res) => {
    // res.send('<h1>This is About Page</h1>')
    res.redirect('/about');
});

app.get('/aboutus', (req, res) => {
    // res.send('<h1>This is About Page</h1>')
    res.redirect('/about');
});

app.get('/teams', (req, res) => {
    // res.send('<h1>This is Teams Page</h1>')
    res.sendFile('./views/teams.html', {root: __dirname});
});

app.get('/myteam', (req, res) => {
    // res.send('<h1>This is Teams Page</h1>')
    res.redirect('/teams');
});

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});

