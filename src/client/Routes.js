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
          ...HomePage,
          path: '/',
          exact: true
        },
        {
            ...AdminsListPage,
            path: '/admins'
          },
        {
          ...UsersListPage,
          path: '/users'
        },
        {
          ...NotFoundPage
        }
      ]
    }
  ];