import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainApp from './App.js';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import store from './Redux/reduxStore.js';
// import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <BrowserRouter>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </BrowserRouter>
  <MainApp />
);

reportWebVitals();
