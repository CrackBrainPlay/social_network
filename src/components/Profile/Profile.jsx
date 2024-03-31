import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={style.content} >
            <div>
                <img className={style.img} src="img/avatar.png" alt='' />
                {/* <div>This place have your message!!</div> */}
                This place have your message!!
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;