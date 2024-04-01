import React from 'react';
import style from './Dialogues.module.css';

const Dialogues = (props) => {
    return (
        <div className={style.dialogs} >
            <div className={style.dialogs_items} >
                <div className={style.item}>
                    Петя
                </div>
                <div className={style.item}>
                    Вася
                </div>
                <div className={style.item}>
                    Маша
                </div>
                <div className={style.item}>
                    Гоша
                </div>
                <div className={style.item}>
                    Саша
                </div>
                <div className={style.item}>
                    Миша
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>Why do you not answer me?</div>
            </div>
        </div>
    );
}

export default Dialogues;