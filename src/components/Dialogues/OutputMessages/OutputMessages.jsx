import React from 'react';
import style from './OutputMessages.module.css';
import Message from './Message/Message';
import { Navigate } from "react-router-dom";

const OutputMessages = (props) => {

    let massagesElements = props.massagesData
        .map(massage => (<Message text={massage.text} id={massage.id} key={massage.id} />))
    if (!props.isAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <div className={style.messages}>
            {massagesElements}
        </div>
    );
}

export default OutputMessages;