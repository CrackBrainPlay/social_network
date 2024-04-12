import React from 'react';
// import style from './AddPost.module.css';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../../Redux/profileReducer';
import AddPost from './AddPost';



const AddPostContainer = (props) => {

    let addPost = () => {
        // props.addPost();
        props.store.dispatch(addPostActionCreator());
    }


    let onPostChange = (text) => {
        // let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <AddPost addPost={addPost} updateNewPostText={onPostChange} />
    )

};

export default AddPostContainer;
