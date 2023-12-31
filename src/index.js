import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <Auth0Provider
      domain="dev-q1rpdfrvpzah12ei.us.auth0.com"
    clientId="GlGhwqDZSdAyll6CmF8nkpZr8HRVFFbg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
