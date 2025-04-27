import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/style.css';
import App from './App.tsx';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

const container = document.getElementById('root');

if (!container)
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );

const root = createRoot(container);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
