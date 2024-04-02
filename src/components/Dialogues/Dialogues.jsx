import React from 'react';
import style from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';
import PersonProfile from './PersonProfile/PersonProfile';

const DialogItem = (props) => {
    let path = "/Dialogues/" + props.id;
    return (
        <div className={style.item}>
            <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to={path}>
                <PersonProfile personName={props.itemName} />
            </NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.text}</div>
    );
}

const Dialogues = (props) => {

    let dialogsData = [
        { id: 1, name: 'Petr' },
        { id: 2, name: 'Stas' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Masha' },
        { id: 5, name: 'Pasha' },
        { id: 6, name: 'Dima' }
    ]

    let massagesData = [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'Why do you not answer me?' }
    ]

    let dialogsElements = dialogsData.map
        (dialog => (<DialogItem itemName={dialog.name} id={dialog.id} />))

    let massagesElements = massagesData.map
        (massage => (<Message text={massage.text} id={massage.id} />))

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