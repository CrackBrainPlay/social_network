import { connect } from 'react-redux';
import React from 'react';
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress
} from '../../Redux/usersReducer';
import User from './User';
import PreLoader from '../AllComponents/PreLoader/PreLoader';
import { usersAPI } from '../../api/api';
// import axios from 'axios';
// import UserAPIComponent from './UserAPIComponent';


class UserContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items)
        });
    }

    render() {
        return (<>
            <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div>

            <User totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
        // isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingInProgress
    }
)(UserContainer);

export default UsersContainer;
