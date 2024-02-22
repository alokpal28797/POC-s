import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import swDev from './swDev';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { integrationsAccountCards } from './Constants/Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App integrationsAccountCards={integrationsAccountCards} />
    </Provider>
  </React.StrictMode>
);
swDev();
reportWebVitals();
