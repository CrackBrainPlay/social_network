import React from 'react';
import style from './ProfileInfo.module.css';
import PreLoader from '../../AllComponents/PreLoader/PreLoader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreLoader />
    }
    // debugger;
    return (
        <div>
            {/* <img className={style.img} src={(props.profile.photos.large === null) ? 'img/avatar.png' : props.profile.photo.large} alt='' /> */}
            <img className={style.img} src={props.profile.photos.large} alt='' />
            {props.profile.fullName}
            {props.profile.aboutMe}
            {props.profile.lookingForAJob}
            {props.profile.lookingForAJobDescription}
            {props.profile.userId}
            <div>This place have your message!!</div>
        </div>
    );
}

export default ProfileInfo;