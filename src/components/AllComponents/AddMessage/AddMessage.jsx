import React from 'react';
import style from './AddMessage.module.css';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../Redux/State';
// import { useParams } from 'react-router-dom';



const AddMessage = (props) => {

    let newPostElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = onMessageChangeActionCreator(text);
        props.dispatch(action);
        console.log(text);
    }

    return (
        <div>
            <div className={style.dialogs}>
                <textarea className={style.dialogs_items} onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button className={style.item} onClick={addMessage}>Add Post</button>
            </div>
        </div>
    )

};

export default AddMessage;
