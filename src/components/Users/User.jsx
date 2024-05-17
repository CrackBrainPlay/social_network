import React from 'react';
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
// import Paginator from '../AllComponents/Paginator/Paginator';
// import axios from 'axios';
// import { usersAPI } from '../../api/api';

const User = ({ user, followingInProgress, follow, unfollow }) => {
    // let user = user;
    return (
        <div key={user.id}>
            <span>
                <div className={style.box}>
                    <NavLink to={'/Profile/' + user.id}>
                        <img src={user.photos.small || user.photos.large === null ? 'img/avatar.png' : user.photos.small} alt='' />
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        (<button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Unfollow</button>)
                        : (<button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            Follow</button>)}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default User;
