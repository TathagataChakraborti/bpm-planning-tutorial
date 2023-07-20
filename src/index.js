import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <App tab="home" />
  </Router>
);
