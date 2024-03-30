import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={style.content} >
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&usqp=CAU" alt='' />
                {/* <div>This place have your message!!</div> */}
                This place have your message!!
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;