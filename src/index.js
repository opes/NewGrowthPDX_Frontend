import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import UserProvider from '../src/hooks/UserProvider.js';

render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);

