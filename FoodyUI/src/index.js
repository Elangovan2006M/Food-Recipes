import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LogoProvider } from './Service/LogoContext';
import { SocialMediaProvider } from './Service/SocialMediaContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogoProvider>
      <SocialMediaProvider>
        <BrowserRouter>
          <App />
          </BrowserRouter>
      </SocialMediaProvider>
    </LogoProvider>
  </React.StrictMode>
);

reportWebVitals();
