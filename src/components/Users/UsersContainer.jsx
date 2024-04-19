import { connect } from 'react-redux';
// import UserAPIComponent from './UserAPIComponent';
import React from 'react';
import axios from 'axios';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../Redux/usersReducer';
import User from './User';
import PreLoader from '../AllComponents/PreLoader/PreLoader';

class UserContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (<>
            {/* <PreLoader isFetching={this.props.isFetching} /> */}
            <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div>

            <User totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                // getUsers={this.props.getUsers}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
        isFetching: state.usersPage.isFetching
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching: (IsFetching) => {
            dispatch(toggleIsFetchingAC(IsFetching));
        }



    }
}

const UsersContainer = connect(mapStateToProps, mapDipatchToProps)(UserContainer);

export default UsersContainer;
