import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    // debugger;
    return (
        <div className={style.content} >
            <ProfileInfo />
            <MyPosts store={props.store} />
            {/* <MyPosts postsData={props.postsPage.postsData}
                newPostText={props.postsPage.newPostText}
                dispatch={props.dispatch} /> */}
        </div>
    );
}

export default Profile;