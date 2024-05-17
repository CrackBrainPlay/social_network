import React from 'react';
import Paginator from '../AllComponents/Paginator/Paginator';
import User from './User';

const UsersFunction = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    return (
        <div>
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
