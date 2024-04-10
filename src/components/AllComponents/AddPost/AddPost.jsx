import React from 'react';
import style from './AddPost.module.css';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../Redux/profileReducer';
// import { useParams } from 'react-router-dom';



const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = onPostChangeActionCreator(text);
        props.dispatch(action);
        console.log(text);
    }

    return (
        <div>
            <div className={style.dialogs}>
                <textarea placeholder='Enter your message...'
                    className={style.dialogs_items}
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText} />
            </div>
            <div className={style.box}>
                <button className={style.item} onClick={addPost}>Add Post</button>
            </div>
        </div>
    )

};

export default AddPost;
