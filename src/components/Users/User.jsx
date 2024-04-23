import React from 'react';
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                            {u.followed
                                ? (<button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "b18f6605-dd13-4632-8e4c-c90af1ba115e"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        })
                                }}>Unfollow</button>)
                                : (<button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "b18f6605-dd13-4632-8e4c-c90af1ba115e"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        })
                                }}>Follow</button>)}
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
