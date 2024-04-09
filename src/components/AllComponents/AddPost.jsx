import React from 'react';
import style from './AddPost.module.css';
import { addPostActionCreator, onPostChangeActionCreator } from '../../Redux/State';



const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
    }

    // dispatch = { props.dispatch }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        let action = onPostChangeActionCreator(text);
        props.dispatch(action);
        console.log(text);
    }

    return (
        <div>
            <div className={style.dialogs}>
                <textarea className={style.dialogs_items} onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button className={style.item} onClick={addPost}>Add Post</button>
            </div>
        </div>
    )

};

export default AddPost;
