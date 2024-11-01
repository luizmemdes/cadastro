import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Remova a extensão .tsx
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
