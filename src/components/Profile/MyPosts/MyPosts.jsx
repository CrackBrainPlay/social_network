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
                <Posts message='How ar you ?' counterLikes='15' />
                <Posts message="It's my first post" counterLikes='4' />
                {/* <Posts />
                <Posts />
                <Posts />
                <Posts /> */}
            </div>
        </div>
    );
}

export default MyPosts;