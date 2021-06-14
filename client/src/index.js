import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

// Global styles
import './index.css';
import { GithubContextProvider } from './context/githubContext';

require('dotenv').config();
// console.log('Index', process.env.REACT_APP_AUTH0_DOMAIN);
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={'http://localhost:3000/dashboard'}
    // redirectUri={window.location.origin}
    cacheLocation="localstorage" // Add this option if you will be using social login to persist auth across pages
  >
    <ReduxProvider store={store}>
      <GithubContextProvider>
        <App />
      </GithubContextProvider>
    </ReduxProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
