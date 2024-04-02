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

    return (
        <div className={style.dialogs} >
            <div className={style.dialogs_items} >
                <DialogItem itemName={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem itemName={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem itemName={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem itemName={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem itemName={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem itemName={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={style.messages}>
                <Message text={massagesData[0].text} id={dialogsData[0].id} />
                <Message text={massagesData[1].text} id={dialogsData[2].id} />
                <Message text={massagesData[2].text} id={dialogsData[3].id} />
            </div>
        </div>
    );
}

export default Dialogues;