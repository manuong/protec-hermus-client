// módulos
import React from 'react';
import ReactDOM from 'react-dom/client';

// componentes
import App from './App.jsx';
import './index.css';

// integración para manejo de rutas
import { BrowserRouter } from 'react-router-dom';

// contexto del estado global
import { Provider } from 'react-redux';
import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
