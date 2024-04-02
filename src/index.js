import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, text: 'How are you ?', counterLikes: 13 },
  { id: 2, text: "It's my first post", counterLikes: 4 },
  { id: 3, text: 'Why do you not answer me?', counterLikes: 76 }
];

let dialogsData = [
  { id: 3, name: 'Petr' },
  { id: 4, name: 'Stas' },
  { id: 5, name: 'Sasha' },
  { id: 6, name: 'Masha' },
  { id: 7, name: 'Pasha' },
  { id: 8, name: 'Dima' }
];

let massagesData = [
  { id: 10, text: 'Hello' },
  { id: 11, text: 'How are you?' },
  { id: 12, text: 'Why do you not answer me?' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} massagesData={massagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
