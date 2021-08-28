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

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null
    });

    Promise.all(promises)
        .then(() => {
            res.send(Renderer(req, store));
        })
        .catch(( e ) => console.log({message: 'error resolving Promise.all', error: e}))

    
});

app.listen(3000, () => {
    console.log('Listening to port: 3000')
})