import React from 'react';

// Screens
import App from './App.js';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users',
        
            }
        ]
    }
];