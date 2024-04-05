import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (props, addPost, updateNewPostText) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props} addPost={addPost} updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>
    );
};