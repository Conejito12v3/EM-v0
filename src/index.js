import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initialState } from './Context/reducers/sesionUsuarioReducer';
import { StateProvider } from './Context/store';
import { mainReducer } from './Context/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
