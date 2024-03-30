import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content} >
            <div>
                <img src="https://media.istockphoto.com/id/1212911887/photo/futuristic-digital-block-chain-background.jpg?s=1024x1024&w=is&k=20&c=Pu_7-kKU2bckXGeEU21ZG84Y_WpaKmh4vzBEA0HwE4E=" alt='' />
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&usqp=CAU" alt='' />
                + description
            </div>
            <div className={style.item}>
                My posts
                <div className={style.item}>
                    New post
                </div>
                <div className={style.item}>
                    post 1
                </div>
                <div className={style.item}>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;