import React from 'react';
import style from '../Dialogues.module.css';
// import style from './../Dialogues.module.css';

const Message = (props) => {
    return (
        <div className={style.message}>{props.text}</div>
    );
}
export default Message;