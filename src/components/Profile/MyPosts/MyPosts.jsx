import React from 'react';
import style from './MyPosts.module.css';
// import Posts from './Posts/Posts';
// import AddPost from '../../AllComponents/AddPost/AddPost';
import AddPostContainer from './AddPost/AddPostContainer';
import OutputPosts from './OutputPosts/OutputPosts';

const MyPosts = (props) => {
    return (
        <div className={style.content} >
            <div className={style.item}>
                My posts
                <div className={style.item}>
                    New post
                </div>
                {/* <AddPostContainer store={props.store}
                    newPostText={props.newPostText}
                    dispatch={props.dispatch} /> */}
                <AddPostContainer store={props.store} />
                <OutputPosts postsData={props.store.getState().profilePage.postsData} />
                {/* <OutputPosts postsData={props.postsData} /> */}
            </div>
        </div>
    );
}

export default MyPosts;