// filepath: [index.js](http://_vscodecontentref_/11)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App.jsx'; // Ensure this points to your custom [App.jsx](http://_vscodecontentref_/12)
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();