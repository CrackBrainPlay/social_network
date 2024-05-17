import { connect } from 'react-redux';
import React from 'react';
import {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers
} from '../../Redux/usersReducer';
import Users from './Users';
import PreLoader from '../AllComponents/PreLoader/PreLoader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getFollowingInProgress
} from '../../Redux/usersSelectors';


class UserContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return (<>
            <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div>

            <Users totalUsersCount={this.props.totalUsersCount}
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

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
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
