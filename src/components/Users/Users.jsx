import React from 'react';
import style from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'img/avatar.png', followed: true, firstName: 'Dmitry', lastName: 'Kavalenko', status: 'I am so pretty', location: { country: 'Belarus', city: 'Minsk' } },
            { id: 2, photoUrl: 'img/avatar.png', followed: false, firstName: 'Petr', lastName: 'Litvinov', status: 'it so great', location: { country: 'Germanu', city: 'Brusel' } },
            { id: 3, photoUrl: 'img/avatar.png', followed: false, firstName: 'Sasha', lastName: 'Stratys', status: 'Happy NEW year', location: { country: 'Usa', city: 'New York' } },
            { id: 4, photoUrl: 'img/avatar.png', followed: true, firstName: 'Stas', lastName: 'Petrov', status: 'Hello world', location: { country: 'Turkey', city: 'Ancara' } },
            { id: 5, photoUrl: 'img/avatar.png', followed: true, firstName: 'Masha', lastName: 'Vilnov', status: 'I need help', location: { country: 'Japan', city: 'Tokyo' } }
        ]
        );
    }

    const usersFrame = props.users
        .map(u =>
            <div key={u.id}>
                <span>
                    <div className={style.box}>
                        <img src={u.photoUrl} alt='' />
                    </div>
                    <div>
                        {u.followed
                            ? (<button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>)
                            : (<button onClick={() => { props.follow(u.id) }}>Follow</button>)}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.firstName}&nbsp;{u.lastName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
        )

    return (
        <div>
            {usersFrame}
        </div>
    );

};

export default Users;
