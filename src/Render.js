import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = (props, addPost) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props} addPost={addPost} />
            </BrowserRouter>
        </React.StrictMode>
    );
};