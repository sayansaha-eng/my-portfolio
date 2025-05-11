import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure we use Router with 'as'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/my-portfolio"> {/* Ensure the basename matches your repository name */}
      <App />
    </Router>
  </React.StrictMode>
);
