import React from 'react';
import style from './Dialogues.module.css';

const Dialogues = (props) => {
    return (
        <div className={style.content} >
            Привет
            <div className={style.item}>
                My posts
                <div className={style.item}>
                    New post
                </div>
                {/* <Posts message='How ar you ?' counterLikes='15' />
                <Posts message="It's my first post" counterLikes='4' />
                <Posts />
                <Posts />
                <Posts />
                <Posts /> */}
            </div>
        </div>
    );
}

export default Dialogues;