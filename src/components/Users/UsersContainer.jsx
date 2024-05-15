import { connect } from 'react-redux';
import React from 'react';
import {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers
} from '../../Redux/usersReducer';
import User from './User';
import PreLoader from '../AllComponents/PreLoader/PreLoader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getFollowingInProgress,
    // getUsersSuperSelector
}
    from '../../Redux/usersSelectors';


class UserContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
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
                followingInProgress={this.props.followingInProgress}
            />
        </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        // users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(connect(mapStateToProps,
    { follow, unfollow, setCurrentPage, requestUsers }),
    withAuthRedirect)
    (UserContainer);
