import React from 'react';
// import style from './AddMessage.module.css';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../Redux/messagesReducer';
import AddMessage from './AddMessage';

const AddMessageContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = onMessageChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return (<AddMessage addMessage={addMessage}
        onMessageChange={onMessageChange}
        newMessageText={state.messagesPage.newMessageText} />

    )

};

export default AddMessageContainer;
