import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Store from './ReduxToolkit/Store/Store';
import { Provider } from 'react-redux';
// import { router } from './assets/constant';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
      <ToastContainer 
        position="top-right"
        autoClose={2500}
      />
    </Provider>
  </BrowserRouter>
);