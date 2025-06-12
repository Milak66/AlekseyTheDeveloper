import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import store from './components/store/store';
import { Provider } from 'react-redux';

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