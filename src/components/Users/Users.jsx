import React, { useEffect, useState } from 'react';
import Paginator from '../AllComponents/Paginator/Paginator';
import User from './User';
import style from './Users.module.css'

const UsersFunction = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Задержка для запуска анимации после монтирования компонента
        setIsVisible(true);
    }, []);
    return (
        <div className={`${style.component} ${isVisible ? style.visible : ''}`}>
            <Paginator currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize} />
            {users.map(u => <User key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow} />
            )}
        </div>
    )
}

export default UsersFunction;
