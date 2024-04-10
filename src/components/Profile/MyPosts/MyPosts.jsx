import React from 'react';
import style from './MyPosts.module.css';
import Posts from './Posts/Posts';
import AddPost from '../../AllComponents/AddPost/AddPost';

const MyPosts = (props) => {
    let postsElement = props.postsData
        .map(post => (<Posts message={post.text} counterLikes={post.counterLikes} />))

    return (
        <div className={style.content} >
            <div className={style.item}>
                My posts
                <div className={style.item}>
                    New post
                </div>
                <AddPost
                    newPostText={props.newPostText}
                    dispatch={props.dispatch} />
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;