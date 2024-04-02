import React from 'react';
import style from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {

    let postsData = [
        { id: 1, text: 'How are you ?', counterLikes: 15 },
        { id: 2, text: "It's my first post", counterLikes: 4 },
        { id: 3, text: 'Why do you not answer me?', counterLikes: 76 }
    ]

    return (
        <div className={style.content} >
            <div className={style.item}>
                My posts
                <div className={style.item}>
                    New post
                </div>
                <Posts message={postsData[0].text} counterLikes={postsData[0].counterLikes} />
                <Posts message={postsData[1].text} counterLikes={postsData[1].counterLikes} />
                <Posts message={postsData[2].text} counterLikes={postsData[2].counterLikes} />
                {/* <Posts />
                <Posts />
                <Posts />
                <Posts /> */}
            </div>
        </div>
    );
}

export default MyPosts;