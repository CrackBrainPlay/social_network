import React from 'react';
import style from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={style.item}>
            <img src='https://ivf-extruders.ru/images/logo.svg' alt='' />
            <div className={style.text}>{props.message}</div>
            <div><span>{props.counterLikes}</span></div>
        </div>
    );
}

export default Posts;