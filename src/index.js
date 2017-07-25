import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
