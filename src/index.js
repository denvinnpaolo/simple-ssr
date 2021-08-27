const express = require('express');
const React = require('react');
const renderToString = require('react-router-dom/server').renderToString;

// Client Components
const Home = require('./client/components/Home.js').default;

const app = express();

app.get(`/`, (req, res) => {
    const content = renderToString(<Home />);

    res.send(content);
});

app.listen(3000, () => {
    console.log('Listening to port: 3000')
})