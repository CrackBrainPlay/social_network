import React from 'react';
import style from './AddPost.module.css';

const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        // props.addPost(text);
        props.addPost();
        // props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // debugger;
        props.updateNewPostText(text);
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
