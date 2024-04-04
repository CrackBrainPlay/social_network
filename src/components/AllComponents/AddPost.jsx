import React from 'react';
import style from './AddPost.module.css';
// import { NavLink } from 'react-router-dom';  

const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        // alert(text);
        props.addPost(text);
    }
    return (
        <div>
            <div className={style.dialogs}>
                <textarea className={style.dialogs_items} ref={newPostElement}></textarea>
            </div>
            <div>
                <button className={style.item} onClick={addPost}>Add Post</button>
            </div>
        </div>
    )

};

export default AddPost;
