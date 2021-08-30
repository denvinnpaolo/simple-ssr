import React from 'react';

// Screens
import App from './App.js';
import AdminsListPage from './pages/AdminsListPage.js';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage.js';
import UsersListPage from './pages/UsersListPage';

export default [
    {
        ...App,
        routes: [
            {
                ...AdminsListPage,
                path: '/admins',
        
            },
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users',
        
            },
            {
                ...NotFoundPage
            }
        ]
    }
];