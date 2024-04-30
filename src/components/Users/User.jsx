import React from 'react';
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { usersAPI } from '../../api/api';

const UserFunction = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span style={{ cursor: 'pointer' }}
                        onClick={(e) => { props.onPageChanged(p) }}
                        className={(props.currentPage === p) ? style.selectedPage : ''}> {p}</span>
                })}
            </div>
            {/* <button onClick={props.getUsers}>Get users</button> */}
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div className={style.box}>
                            <NavLink to={'/Profile/' + u.id}>
                                <img src={u.photos.small || u.photos.large === null ? 'img/avatar.png' : u.photos.small} alt='' />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                (<button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => { props.follow(u.id) }}>
                                    Unfollow</button>)
                                : (<button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => { props.unfollow(u.id) }}>
                                    Follow</button>)}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    )
}

export default UserFunction;
