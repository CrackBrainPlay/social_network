import React from 'react';
import style from './PersonProfile.module.css';

const PersonProfile = (props) => {
    return (
        <div className={style.content} >
            <div><img className={style.img} src='img/avatar.png' alt='Profile' />
            </div>
            <div className={(props.activeLink === true) ? style.item + ' ' + style.activeLink : style.item}>
                {props.personName}
            </div>
        </div >
    );
}

export default PersonProfile;