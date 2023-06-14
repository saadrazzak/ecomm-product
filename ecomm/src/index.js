import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';
import { Provider } from 'react-redux'
import { ecommStore } from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ecommStore}>
    <App />
  </Provider>,
);