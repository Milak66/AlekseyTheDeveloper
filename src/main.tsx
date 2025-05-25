import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './components/store/store';

const rootElement = document.getElementById('root') as HTMLDivElement; 
if (rootElement) { 
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found!"); 
}