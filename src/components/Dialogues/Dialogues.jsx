import React from 'react';
import style from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';
import PersonProfile from './PersonProfile/PersonProfile';

const DialogItem = (props) => {
    let path = "/Dialogues/" + props.itemLink;
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
    return (
        <div className={style.dialogs} >
            <div className={style.dialogs_items} >
                <DialogItem itemName='Petr' itemLink='1' />
                <DialogItem itemName='Stas' itemLink='2' />
                <DialogItem itemName='Sasha' itemLink='3' />
                <DialogItem itemName='Masha' itemLink='4' />
                <DialogItem itemName='Pasha' itemLink='5' />
                <DialogItem itemName='Dima' itemLink='6' />
            </div>
            <div className={style.messages}>
                <Message text='Hello' />
                <Message text='How are you?' />
                <Message text='Why do you not answer me?' />
                {/* <div className={style.message}>Hello</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>Why do you not answer me?</div> */}
            </div>
        </div>
    );
}

export default Dialogues;