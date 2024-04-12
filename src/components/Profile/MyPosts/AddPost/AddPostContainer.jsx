import React from 'react';
// import style from './AddPost.module.css';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../../Redux/profileReducer';
import AddPost from './AddPost';

const AddPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        // props.addPost();
    }


    let onPostChange = (text) => {
        // let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <AddPost addPost={addPost}
            updateNewPostText={onPostChange}
            newPostText={state.profilePage.newPostText} />
    )

};

export default AddPostContainer;
