import React from 'react';
import style from './AddPost.module.css';
// import { NavLink } from 'react-router-dom';  

const AddPost = () => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div>
            <div className={style.dialogs}>
                <textarea className={style.dialogs_items} ref={newPostElement}></textarea>
            </div>
            <div>
                <button className={style.item} onClick={addPost}>Add post</button>
            </div>
        </div>
    )

};

export default AddPost;
