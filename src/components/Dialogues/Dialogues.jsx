import React from 'react';
import style from './Dialogues.module.css';
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
// import AddPost from '../AllComponents/AddPost';
import AddMessage from '../AllComponents/AddMessage/AddMessage';

const Dialogues = (props) => {

    let dialogsElements = props.messagesPage.dialogsData
        .map(dialog => (<DialogItem itemName={dialog.name} id={dialog.id} />))

    let massagesElements = props.messagesPage.massagesData
        .map(massage => (<Message text={massage.text} id={massage.id} />))
    return (
        <div className={style.dialogs} >
            <div className={style.dialogs_items} >
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {massagesElements}
                <div>
                    <AddMessage
                        newMessageText={props.messagesPage.newMessageText}
                        dispatch={props.dispatch} />
                </div>
            </div>
        </div>
    );
}

export default Dialogues;