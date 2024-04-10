import React from 'react';
import style from './AddMessage.module.css';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../Redux/messagesReducer';
// import { useParams } from 'react-router-dom';



const AddMessage = (props) => {

    let newPostElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newPostElement.current.value;
        let action = onMessageChangeActionCreator(text);
        props.dispatch(action);
        console.log(text);
    }

    return (
        <div>
            <div className={style.dialogs}>
                <textarea placeholder='Enter your message...'
                    className={style.dialogs_items}
                    onChange={onMessageChange}
                    ref={newPostElement}
                    value={props.newMessageText} />
            </div>
            <div>
                <button className={style.item} onClick={addMessage}>Add Post</button>
            </div>
        </div>
    )

};

export default AddMessage;
