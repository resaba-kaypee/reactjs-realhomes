import React from 'react';
import ReactDOM from 'react-dom';
import PropertyState from './context/property/PropertyState';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/main.css';
import '@brainhubeu/react-carousel/lib/style.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <PropertyState>
      <Router>
        <App />
      </Router>
    </PropertyState>
  </React.StrictMode>,
  document.getElementById('root')
);
