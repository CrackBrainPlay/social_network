import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={style.img} src="img/avatar.png" alt='' />
            <div>This place have your message!!</div>
        </div>
    );
}

export default ProfileInfo;