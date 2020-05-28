import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeFakeServer } from './fakeServer';

if (process.env.NODE_ENV !== 'production' ) makeFakeServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

module.hot.accept();