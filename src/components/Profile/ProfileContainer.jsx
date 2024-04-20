import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Profile from './Profile';
import PreLoader from '../AllComponents/PreLoader/PreLoader';
import { setUserProfile } from '../../Redux/profileReducer';

class ProfileContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        // if (this.props.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // this.props.toggleIsFetching(false);
                this.props.setUserProfile(response.data);
                // this.props.setTotalUsersCount(response.data.totalCount);
            });
        // }
    }

    // onPageChanged = (pageNumber) => {
    //     this.props.setCurrentPage(pageNumber);
    //     this.props.toggleIsFetching(true);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/${pageNumber}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setUsers(response.data.items)
    //         });
    // }

    render() {
        return (<>
            <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div>
            <Profile {...this.props} profile={this.props.profile} />
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
        // users: state.usersPage.users,
        // pageSize: state.usersPage.pageSize,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // currentPage: state.usersPage.currentPage,
        // isFetching: state.usersPage.isFetching
    }
}

const ProfilesContainer = connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);

export default ProfilesContainer;
