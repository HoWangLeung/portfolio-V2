import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StylesProvider } from '@mui/styles';
import store from './configureStore'
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <StylesProvider injectFirst>
    <React.StrictMode>
      <Provider store={store}>
        {/* <CssBaseline /> */}
        <App />
      </Provider>
    </React.StrictMode>
  </StylesProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
