import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { CssBaseline } from '@mui/material';
import { AppThemeProvider } from './themes/AppThemeProvider';
import store from './app/store';
import router from './router';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
);
