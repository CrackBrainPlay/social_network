import React from 'react';
import style from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {
    return (
        <div className={style.content} >
            <div className={style.item}>
                My posts
                <div className={style.item}>
                    New post
                </div>
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
            </div>
        </div>
    );
}

export default MyPosts;