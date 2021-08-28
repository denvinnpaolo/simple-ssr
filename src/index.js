import 'babel-polyfill';
import express from 'express';
import Renderer from './helpers/Renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
// Custom store for server
import createStore from './helpers/createStore.js';


const app = express();

app.use(express.static("public"));    


app.get(`*`, (req, res) => {
    const store = createStore();

    matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData() : null
    });

    res.send(Renderer(req, store));
});

app.listen(3000, () => {
    console.log('Listening to port: 3000')
})