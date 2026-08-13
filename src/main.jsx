import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import './index.css';
import App from './App.jsx';
import BookingProvider from './contexts/BookingProvider.jsx';
import ThemeProvider from './contexts/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BookingProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BookingProvider>
    </BrowserRouter>
  </StrictMode>,
);