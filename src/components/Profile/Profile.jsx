import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div className={style.content} >
            <ProfileInfo profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} />
            <MyPosts />
        </div>
    );
}

export default Profile;