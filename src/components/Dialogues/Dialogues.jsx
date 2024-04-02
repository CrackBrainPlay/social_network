import React from 'react';
import style from './Dialogues.module.css';
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogues = (props) => {

    let dialogsElements = props.dialogsData
        .map(dialog => (<DialogItem itemName={dialog.name} id={dialog.id} />))

    let massagesElements = props.massagesData
        .map(massage => (<Message text={massage.text} id={massage.id} />))

    return (
        <div className={style.dialogs} >
            <div className={style.dialogs_items} >
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {massagesElements}
            </div>
        </div>
    );
}

export default Dialogues;