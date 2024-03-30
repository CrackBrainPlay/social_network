import React from 'react';
import style from './Posts.module.css';

const Posts = () => {
    return (
        <div className={style.item}>
            <img src='https://ivf-extruders.ru/images/logo.svg' alt='' />
            <div className={style.text}>This palce have your message!</div>
            <div><span>like</span></div>
        </div>
    );
}

export default Posts;