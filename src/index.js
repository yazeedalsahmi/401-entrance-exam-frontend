import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


// TODO: wrap everything in Auth0
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-8i4d2xlu.us.auth0.com"
    clientId="mGKqoLz3lFazk4fqFJq3ViRyhZ5ZhnWa"
    redirectUri={window.location.origin}
  >

    <App />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
