import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Entry point — renders the App component into the #root element.
 *
 * globals.css is imported inside App.jsx so that Tailwind's
 * base/component/utility layers are loaded before any
 * component styles are applied.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
